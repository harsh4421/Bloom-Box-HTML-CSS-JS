// subscription.js — Dynamic pricing, form validation, success modal

document.addEventListener('DOMContentLoaded', () => {

    const form = document.getElementById('subscription-form');
    if (!form) return;

    // ─── Load Order Data from localStorage (set from boxes.html) ───────────
    let orderData = JSON.parse(localStorage.getItem('bloomboxOrder'));

    // Fallback if accessed directly (no prior box selection)
    if (!orderData) {
        orderData = {
            boxSize: 'Medium',
            boxPrice: 799,
            flowerType: 'Mixed Seasonal',
            vaseOption: 'No Vase',
            vasePrice: 0
        };
    }

    // ─── DOM References ─────────────────────────────────────────────────────
    const summaryBox = document.getElementById('summary-box');
    const summaryBoxPrice = document.getElementById('summary-box-price');
    const summaryFrequency = document.getElementById('summary-frequency');
    const summaryVasePrice = document.getElementById('summary-vase-price');
    const summaryAddonsContainer = document.getElementById('summary-addons-container');
    const discountRow = document.getElementById('discount-row');
    const summaryDiscount = document.getElementById('summary-discount');
    const summaryTotalPrice = document.getElementById('summary-total-price');
    const paymentTermText = document.getElementById('payment-term-text');
    const checkoutBtn = document.getElementById('checkout-btn');

    // Success modal elements
    const modal = document.getElementById('success-modal');
    const modalMessage = document.getElementById('modal-message');
    const modalDetails = document.getElementById('modal-details');
    const modalCloseBtn = document.getElementById('modal-close-btn');

    // ─── Helpers ─────────────────────────────────────────────────────────────
    const formatCurrency = (val) => `₹${val.toLocaleString('en-IN', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`;

    const frequenciesPerMonth = { Weekly: 4, BiWeekly: 2, Monthly: 1 };
    const frequencyLabels = { Weekly: 'Weekly', BiWeekly: 'Bi-Weekly', Monthly: 'Monthly' };

    // ─── Update Order Summary ─────────────────────────────────────────────
    const updateSummary = () => {
        // 1. Frequency
        const freqInput = document.querySelector('input[name="frequency"]:checked');
        const frequencyValue = freqInput ? freqInput.value : 'Weekly';
        const activeFreqLabel = frequencyLabels[frequencyValue] || 'Weekly';

        // 2. Add-ons
        const addonInputs = document.querySelectorAll('input[name="addons"]:checked');
        let addonsTotalPerDelivery = 0;

        summaryAddonsContainer.innerHTML = '';

        // Flower type & vase sub-lines
        summaryAddonsContainer.innerHTML += `
            <div class="summary-line text-sm text-gray">
                <span>🌸 Flower: ${orderData.flowerType}</span>
                <span></span>
            </div>`;

        const displayVaseName = (orderData.vaseOption === '0' || !orderData.vaseOption) ? 'No Vase' : orderData.vaseOption;
        summaryAddonsContainer.innerHTML += `
            <div class="summary-line text-sm text-gray">
                <span>🏺 Vase: ${displayVaseName}</span>
                <span></span>
            </div>`;

        addonInputs.forEach(addon => {
            const price = parseFloat(addon.value);
            addonsTotalPerDelivery += price;

            const div = document.createElement('div');
            div.className = 'summary-line text-sm text-gray';
            div.innerHTML = `
                <span>+ ${addon.dataset.name}</span>
                <span>${formatCurrency(price)}</span>`;
            summaryAddonsContainer.appendChild(div);
        });

        // 3. Payment Plan
        const planInput = document.querySelector('input[name="paymentPlan"]:checked');
        const isYearly = planInput && planInput.value === 'YearlyPrepay';

        // 4. Pricing Calculation
        const costPerDelivery = orderData.boxPrice + orderData.vasePrice + addonsTotalPerDelivery;
        let finalTotal = 0;

        if (isYearly) {
            const deliveriesPerYear = frequenciesPerMonth[frequencyValue] * 12;
            const subtotalYear = costPerDelivery * deliveriesPerYear;
            const discountAmount = subtotalYear * 0.17;
            finalTotal = subtotalYear - discountAmount;

            discountRow.style.display = 'flex';
            summaryDiscount.textContent = `-${formatCurrency(discountAmount)}`;
            paymentTermText.textContent = 'annually';
        } else {
            finalTotal = costPerDelivery;
            discountRow.style.display = 'none';
            paymentTermText.textContent = 'per delivery';
        }

        // 5. Update DOM
        summaryBox.textContent = `${orderData.boxSize} Box`;
        summaryBoxPrice.textContent = formatCurrency(orderData.boxPrice);
        summaryFrequency.textContent = activeFreqLabel;
        summaryVasePrice.textContent = formatCurrency(orderData.vasePrice);

        // Animate price
        summaryTotalPrice.classList.remove('pulse');
        void summaryTotalPrice.offsetWidth; // reflow to re-trigger animation
        summaryTotalPrice.textContent = formatCurrency(finalTotal);
        summaryTotalPrice.classList.add('pulse');
        setTimeout(() => summaryTotalPrice.classList.remove('pulse'), 400);
    };

    // ─── Attach Input Listeners ───────────────────────────────────────────
    form.querySelectorAll('input, select').forEach(input => {
        input.addEventListener('change', updateSummary);
    });

    // ─── Success Modal Logic ─────────────────────────────────────────────
    const showSuccessModal = (name, phone, email, address) => {
        modalMessage.textContent = `Thank you, ${name}! Your subscription is confirmed. We'll send updates to ${email}.`;

        modalDetails.innerHTML = `
            <strong>📦 ${orderData.boxSize} Box</strong> · ${document.querySelector('input[name="frequency"]:checked')?.value || 'Weekly'}<br>
            📞 ${phone}<br>
            📍 ${address}`;

        modal.classList.add('visible');
        document.body.style.overflow = 'hidden';
    };

    const hideSuccessModal = () => {
        modal.classList.remove('visible');
        document.body.style.overflow = '';
        localStorage.removeItem('bloomboxOrder');
        window.location.href = 'boxes.html';
    };

    // Close on button
    if (modalCloseBtn) modalCloseBtn.addEventListener('click', hideSuccessModal);

    // Close on overlay click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) hideSuccessModal();
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('visible')) hideSuccessModal();
    });

    // ─── Form Submission ─────────────────────────────────────────────────
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('customerName')?.value.trim();
        const phone = document.getElementById('customerPhone')?.value.trim();
        const email = document.getElementById('customerEmail')?.value.trim();
        const address = document.getElementById('customerAddress')?.value.trim();

        // Basic validation
        if (!name || !phone || !email || !address) {
            // Highlight first empty field
            [
                { id: 'customerName', val: name },
                { id: 'customerPhone', val: phone },
                { id: 'customerEmail', val: email },
                { id: 'customerAddress', val: address }
            ].forEach(({ id, val }) => {
                const el = document.getElementById(id);
                if (el) {
                    el.style.borderColor = val ? '' : '#c0607a';
                    if (!val) el.focus();
                }
            });
            return;
        }

        // Loading state
        checkoutBtn.classList.add('loading');
        checkoutBtn.disabled = true;

        // Simulate async (e.g. API call) then show modal
        setTimeout(() => {
            checkoutBtn.classList.remove('loading');
            checkoutBtn.disabled = false;
            showSuccessModal(name, phone, email, address);
        }, 1200);
    });

    // Clear red border on re-focus
    form.querySelectorAll('.custom-input').forEach(input => {
        input.addEventListener('focus', () => {
            input.style.borderColor = '';
        });
    });

    // ─── Initial Render ───────────────────────────────────────────────────
    updateSummary();
});
