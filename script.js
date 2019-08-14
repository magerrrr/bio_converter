let converterDB = {
	biomarkers: {
		0: {name: 'Insulin',
			unit:
				[['mmol/l', 0],
				 ['pmol/l', 6.945], // 14-140 нормальный диапазон
				 ['mg/dl',  0.347], 
 				 ['mg/ml',  0.0347],
 				 ['g',      0.0000347],
				 ['IU',     1], 
				 ['µIU/mL', 1], // 2.0-20 нормальный диапазон
				 ['mIU/L',  1] 
				],
			},
		1: {name:'Glucose',
			unit: 
				[['mmol/l', 1],
				 ['pmol/l', 1000000000],
				 ['mg/dl',  18.01559],
				],
			}
	},
	units: {
		0: 'mmol/L',
		1: 'pmol/L',
		2: 'mg/dl',
		3: 'mg/ml', // тоже самое что мг
		4: 'g', // грамм
		5: 'IU', // International Unit = МЕ (Международная Единица) = ЕД (Единица Действия). В фармакологии единица дозы вещества, основанная на его биологической активности
		6: 'µIU/mL', // мкМЕ/мл = мкЕд/мл
		7: 'mIU/L', // мМЕ/л
	}
};

function converter(biomarker, convertFrom, convertTo, value){
	// Проверка для Инсулина: converter(0,1,6,180)       = 25.9 µIU/mL
	// Проверка для Инсулина: converter(0,6,1,25)        = 173.6 pmol/L
	// Проверка для Глюкозы:  convert(1, 0, 1, 5)        = 90.07795 mg/dl
	// Проверка для Глюкозы:  convert(1, 1, 0, 90.07795) = 5 mmol/l
	if(isNaN(biomarker)){
    	return "Ошибка! Значение аргумента 'biomarker' не числовое!\n Решение: Введите валидное значение аргумента 'biomarker'";
    	}  
	if(isNaN(convertFrom)){
    	return "Ошибка! Значение аргумента 'convertFrom' не числовое!\n Решение: Введите валидное значение аргумента 'convertFrom'";
 		}
	if(isNaN(convertTo)){
    	return "Ошибка! Значение аргумента 'convertTo' не числовое!\n Решение: Введите валидное значение аргумента 'convertTo'";
 		}  	 
	if(isNaN(value)){
    	return "Ошибка! Значение аргумента 'value' не числовое!\n Решение: Введите валидное значение аргумента 'value'";
 		} 

	let marker = converterDB.biomarkers[biomarker].name;
	let unitFrom = converterDB.biomarkers[biomarker].unit[convertFrom][0]
	let unitTo = converterDB.biomarkers[biomarker].unit[convertTo][0]
	let convFrom = converterDB.biomarkers[biomarker].unit[convertFrom][1];
	let convTo = converterDB.biomarkers[biomarker].unit[convertTo][1];
	let result = value * convTo/convFrom;

	console.log('Результат(' + marker + '): ' + value + ' ' + unitFrom + ' = ' + result + ' ' + unitTo);
	return result;
}