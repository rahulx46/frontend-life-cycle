export const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
        currency: 'INR',
        style: 'currency'
    }).format(amount);
}