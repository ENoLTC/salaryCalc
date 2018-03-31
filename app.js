document.getElementById('calc').addEventListener('click', function(e) {
  document.querySelector('.load').style.display = 'flex';
  pressed();
  setTimeout(calc, 700);

  e.preventDefault(); 
});

function calc() {
  const salary = Number(document.getElementById('salary').value);
  const overtime = Number(document.getElementById('overtime').value);
  const daytime = Number(document.getElementById('daytime').value);
  const nighttime = Number(document.getElementById('nighttime').value);

  const hours = ((daytime + nighttime) * 11.5 - overtime);
  const overtimePrice = (salary / hours) * overtime * 2;
  const nighttimeBonus = (salary / hours) * 8 * 0.4;
  const harm = salary * 0.04;
  const milk = (daytime + nighttime) * 28;
  const los = 1500;
  const summary = salary + overtimePrice + nighttimeBonus + harm + milk + los;
  const ndflVal = summary * 0.13;
  const payVal = summary - ndflVal;

  const oklad = document.getElementById('okl');
  const sverh = document.getElementById('sverh');
  const noch = document.getElementById('noch');
  const vred = document.getElementById('vred');
  const moloko = document.getElementById('moloko');
  const visl = document.getElementById('visl');
  const tot = document.getElementById('tot');
  const ndfl = document.getElementById('ndfl');
  const pay = document.getElementById('pay');

  oklad.innerText = `${salary.toFixed(2)} руб.`;
  sverh.innerText = `${overtimePrice.toFixed(2)} руб.`;
  noch.innerText = `${nighttimeBonus.toFixed(2)} руб.`;
  vred.innerText = `${harm.toFixed(2)} руб.`;
  moloko.innerText = `${milk.toFixed(2)} руб.`;
  visl.innerText = `${los.toFixed(2)} руб.`;
  tot.innerText = `${summary.toFixed(2)} руб.`;
  ndfl.innerText = `${ndflVal.toFixed(2)} руб.`;
  pay.innerText = `${payVal.toFixed(2)} руб.`;

  console.log(salary);
  document.querySelector('.load').style.display = 'none';

  if (salary === 0) {
    console.log('err');
    const errDiv = document.createElement('div');
    errDiv.className = 'col s12 red darken-2 white-text err';
    errDiv.appendChild(document.createTextNode('Проверь значения!'));
    document.querySelector('.container').insertBefore(errDiv, document.querySelector('.insert'));
    setTimeout(clearErr, 3000);
  } else if (isFinite(salary && overtime && daytime && nighttime)) {
    document.querySelector('.result').classList.add('pressed');
    document.querySelector('.result').style.display = 'block';
  }
  else {
    console.log('err');
    const errDiv = document.createElement('div');
    errDiv.className = 'col s12 red darken-2 white-text err';
    errDiv.appendChild(document.createTextNode('Проверь значения!'));
    document.querySelector('.container').insertBefore(errDiv, document.querySelector('.insert'));
    setTimeout(clearErr, 3000);
  };
};

function pressed() {
  const result = document.querySelector('.result');
  if (result.classList.contains('pressed')) {
    result.style.display = 'none';
  }
}

function clearErr() {
  document.querySelector('.err').remove();
}