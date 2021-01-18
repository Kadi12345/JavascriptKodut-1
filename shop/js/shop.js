'use strict';
let selectedState = null;
let activeTaxRate = null;

const STATE_SELECTOR = document.getElementById('state-select');
const PRODUCT_SELECTOR = document.getElementById('product-select');
const SHOPPING_CART = document.getElementById('shopping-cart');

function onStateChange(state) {
    selectedState = state;
    activeTaxRate = STATES[state].taxrate;
    calculateAndShowTotals();
    console.log(state)
    localStorage.setItem('state', state);


    document.getElementById('selected-state').innerHTML = STATES[state].name;
    document.getElementById('taxrate').innerHTML = `(${activeTaxRate} %)`;
}

function getDiscountPercent(purchaseTotal) {

    if (isNaN(purchaseTotal)) {
        throw 'Input must be a number!';
    }

    let retVal = 0;
    if (purchaseTotal >= 1000 && purchaseTotal < 5000) {
        retVal = 3;
    } else if (purchaseTotal >= 5000 && purchaseTotal < 7000) {
        retVal = 5;
    } else if (purchaseTotal >= 7000 && purchaseTotal < 10000) {
        retVal = 7;
    } else if (purchaseTotal >= 10000 && purchaseTotal < 50000) {
        retVal = 10;
    } else if (purchaseTotal >= 50000) {
        retVal = 15;
    }
    return retVal;
}

function addToShoppingCart(product) {

    if (updateRowIfProductExistsInCart(product) === true) {
        return;
    }

    const row = SHOPPING_CART.getElementsByTagName('tbody')[0].insertRow(-1);
    const id = Date.now() + Math.random().toString(36).substr(2, 9);

    row.id = id;
    row.dataset.productId = product.id;
    row.dataset.rowTotal = product.price;
    row.dataset.productPrice = product.price;

    for (let i = 0; i < 5; i++) {
        const cell = row.insertCell(row.cells.length);

        if (i === 0) {
            cell.innerHTML = product.name;
        } else if (i === 1) {
            cell.innerHTML = '$ ' + product.price;
        } else if (i === 2) {
            let input = document.createElement('input');
            input.className += 'product-quantity form-control form-control-sm';
            input.type = 'number';
            input.min = 1;
            input.value = 1;
            input.dataset.row = id;
            cell.appendChild(input);
        } else if (i === 3) {
            let btn = document.createElement('button');
            btn.className += 'btn btn-sm btn-danger remove-product';
            btn.type = 'button';
            btn.dataset.row = id;
            btn.innerHTML = 'Remove';
            cell.appendChild(btn);
        } else if (i === 4) {
            cell.innerHTML = '$ ' + product.price;
        }
    }
    document.getElementById('checkout-btn').disabled = false;
}

function updateRowIfProductExistsInCart(product) {
    const row = document.querySelector('[data-product-id="' + product.id + '"]') || false;

    if (row !== false) {
        const quantityInput = row.getElementsByTagName('input')[0];
        quantityInput.value = parseInt(quantityInput.value) + 1;
        calculateRowTotal(row.id);
    }

    return row !== false;
}

function calculateRowTotal(rowId) {
    const row = document.getElementById(rowId);
    const quantity = parseInt(row.getElementsByTagName('input')[0].value);
    const rowTotal = (quantity * parseFloat(row.dataset.productPrice)).toFixed(2);
    const rowTotalCell = row.cells[4];
    row.dataset.rowTotal = rowTotal;
    rowTotalCell.innerHTML = '$ ' + rowTotal;
}

function calculateAndShowTotals() {
    const subTotal = calculateSubtotal();
    const discountPercent = getDiscountPercent(subTotal);
    const discountSum = calculateDiscountSum(subTotal, discountPercent);
    const taxSum = calculateTaxSum((subTotal - discountSum), activeTaxRate);
    const grandTotal = ((subTotal - discountSum) + taxSum).toFixed(2);

    document.getElementById('discount').innerHTML = `(${discountPercent} %)`;
    document.getElementById('discount-calculated').innerHTML = '$ ' + (discountSum).toFixed(2);
    document.getElementById('subtotal-calculated').innerHTML = '$ ' + (subTotal).toFixed(2);
    document.getElementById('tax-calculated').innerHTML = '$ ' + (taxSum).toFixed(2);
    document.getElementById('grand-total-calculated').innerHTML = '$ ' + grandTotal;
    document.getElementById('cart-total').innerHTML = grandTotal;
}

function calculateSubtotal() {
    const rows = SHOPPING_CART.tBodies[0].rows;
    let subTotal = 0;
    for (let i = 0; i < rows.length; i++) {
        subTotal = subTotal + parseFloat(rows[i].dataset.rowTotal);
    }
    return parseFloat((subTotal > 0) ? subTotal.toFixed(2) : 0);
}

function calculateDiscountSum(subTotal = 0, discountPercent = 0) {
    if (isNaN(subTotal) || isNaN(discountPercent))
        throw 'Only numeric parameters allowed!';
    return parseFloat((discountPercent > 0) ? ((parseInt(discountPercent) / 100) * subTotal).toFixed(2) : 0);
}

function calculateTaxSum(subTotal, taxRate = 0) {
    if (isNaN(subTotal) || isNaN(taxRate))
        throw 'Only numeric parameters allowed!';
    return parseFloat((((taxRate > 0) ? (parseFloat(taxRate) / 100) : 1) * (subTotal > 0 ? parseFloat(subTotal) : 0)).toFixed(2));
}

function initProductSelection() {
    for (let i = 0; i < PRODUCTS.length; i++) {
        let option = document.createElement('option');
        let product = PRODUCTS[i];
        option.text = product.name + ' - $ ' + product.price;
        option.dataset.name = product.name;
        option.dataset.price = product.price;
        option.dataset.id = product.id;
        PRODUCT_SELECTOR.add(option);
    }
}

function initStateSelection() {
    for (let state in STATES) {
        if (STATES.hasOwnProperty(state)) {
            let option = document.createElement('option');
            option.text = STATES[state].name;
            option.value = state;
            STATE_SELECTOR.add(option);
        }
    }
    onStateChange(STATE_SELECTOR.options[STATE_SELECTOR.selectedIndex].value);
}

function initEventListeners() {

    STATE_SELECTOR.addEventListener('change', function () {
        onStateChange(this.value);
        document.getElementById('close-configuration-modal-btn').click();
    });

    SHOPPING_CART.addEventListener('click', function (event) {
        const target = event.target;
        if (target && target.tagName !== 'BUTTON') {
            return;
        }

        if (target.classList.contains('remove-product')) {
            const row = document.getElementById(target.dataset.row);
            row.parentNode.removeChild(row);
            calculateAndShowTotals();

            if (SHOPPING_CART.tBodies[0].rows.length < 1) {
                document.getElementById('checkout-btn').disabled = true;
            }
        }
    });

    document.getElementById('add-to-cart-btn').addEventListener('click', function () {
        const selectedProductElement = PRODUCT_SELECTOR.options[PRODUCT_SELECTOR.selectedIndex];
        const product = {
            name: selectedProductElement.dataset.name,
            price: selectedProductElement.dataset.price,
            id: selectedProductElement.dataset.id
        };
        document.getElementById('close-product-selection-modal-btn').click();
        addToShoppingCart(product);
        calculateAndShowTotals();
    });

    SHOPPING_CART.addEventListener('input', function (event) {
        const target = event.target;
        if (target && target.tagName !== 'INPUT') {
            return;
        }

        if (target.classList.contains('product-quantity')) {
            calculateRowTotal(target.dataset.row);
            calculateAndShowTotals();
        }
    });

    document.getElementById('card-payment-chekbox').addEventListener('change', function () {
        if (this.checked) {
            document.getElementById('cash-operations-wrapper').style.display = 'none';
            document.getElementById('finalize-checkout-btn').disabled = false;
        } else {
            document.getElementById('cash-operations-wrapper').style.display = 'block';
            document.getElementById('finalize-checkout-btn').disabled = true;
        }
    });

    document.getElementById('finalize-checkout-btn').addEventListener('click', function () {
        SHOPPING_CART.tBodies[0].innerHTML = '';
        calculateAndShowTotals();
        document.getElementById('checkout-btn').disabled = true;
        document.getElementById('close-checkout-modal-btn').click();
    });

    document.getElementById('cash-received-input').addEventListener('input', function () {
        const dotSeparatedValue = this.value.replace(/,/, '.');
        const cashBack =
            (parseFloat(dotSeparatedValue) - parseFloat(document.getElementById('cart-total').innerHTML))
                .toFixed(2);
        document.getElementById('cash-back-input').value = cashBack;
        document.getElementById('finalize-checkout-btn').disabled = (cashBack < 0);
    });
}

function initApp() {
    initStateSelection();
    initProductSelection();
    initEventListeners();

    window.addEventListener("beforeunload", function (event) {
        event.returnValue = null;

    });

}







