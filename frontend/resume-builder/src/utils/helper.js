export const validateEmail = (email) => {
    const check = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return check.test(email);
}