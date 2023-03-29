// Debug The Function & Calculate The Answer

const calculateAnswer = (email) =>

{

const [localPart, domain] = emai.split("@");

const [hostname, ...countryCodes] = domin.split(".");

return `${localPart.length}${hostnme.length}${countryCodes.reduce( (a,cc) => a + cc.length, "") }`;
}