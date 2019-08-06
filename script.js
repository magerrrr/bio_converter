/*let converterDB = {
	biomarkers: {
		0: 'Insulin',
		1: 'Glucose',
		2: 'LDL'
	},
	units: {
		0: 'mmol/l',
		1: 'mg/dl'
	}
};
*/

function insulinConverter(insulinValueMMolL) {
  document.getElementById("outputMGPERDL").innerHTML=insulinValueMMolL*18;
}

function converter(biomarker, convertFrom, convertTo, valueToConvert){
	if (biomarker === 0){
		if ((convertFrom === 0)&&(convertTo === 1)){
			let result = valueToConvert*18
			return result;
			} else if ((convertFrom === 1)&&(convertTo === 0)) {
			let result = valueToConvert*0.05555556
			return result;
		}
	}
} 


/*function insulinConverter(insulinValueMMolL){
	let insulinValueMgDl = insulinValueMMolL*18;
	return insulinValueMgDl;
}*/


