class StatsApp {
  inputData: HTMLElement;
  data1Input: HTMLInputElement;
  data2Input: HTMLInputElement;
  data3Input: HTMLInputElement;
  data4Input: HTMLInputElement;


  sumInput: HTMLInputElement;
  avgInput: HTMLInputElement;
  minInput: HTMLInputElement;
  maxInput: HTMLInputElement;

  constructor() {
    this.startApp();
  }

  private startApp() {
    this.getInputs();
    this.watchInputValues();
  }

  private getInputs() {
    this.data1Input = document.querySelector('#data1');
    this.data2Input = document.querySelector('#data2');
    this.data3Input = document.querySelector('#data3');
    this.data4Input = document.querySelector('#data4');
    this.inputData  = document.querySelector('.input-data');

    this.sumInput  = document.querySelector('#sum');
    this.avgInput  = document.querySelector('#avg');
    this.minInput  = document.querySelector('#min');
    this.maxInput  = document.querySelector('#max');
  }

  private watchInputValues() {
    this.data1Input.addEventListener('input', () => this.generateInputs());
    this.data2Input.addEventListener('input', () => this.computeData());
    this.data3Input.addEventListener('input', () => this.computeData());
    this.data4Input.addEventListener('input', () => this.computeData());
  }

  private computeData() {
    const data1 = +this.data1Input.value;
    const data2 = +this.data2Input.value;
    const data3 = +this.data3Input.value;
    const data4 = +this.data4Input.value;

    if (!data1 || !data2 || !data3 || !data4) {
      this.setLoadingIcon();
    }

    const sum = data1 + data2 + data3 + data4;
    const avg = sum / 4;
    const min = Math.min(data1, data2, data3, data4);
    const max = Math.max(data1, data2, data3, data4);

    this.setData(sum, avg, min, max);
  }
  private generateInputs() {
    let amount: number = +this.data1Input.value;
    for (let i: number = 0; i < amount; i++) {
      let input: HTMLInputElement = document.createElement('input');
      input.id = `data${i}`;
      this.inputData.appendChild(input);
    }
  }

  private setData(sum: number, avg: number, min: number, max: number) {
    this.sumInput.value = String(sum);
    this.avgInput.value = String(avg);
    this.minInput.value = String(min);
    this.maxInput.value = String(max);
  }

  private setLoadingIcon() {
    this.data1Input.style.background = "url('loading.svg')";
  }
}
const statsApp = new StatsApp();
