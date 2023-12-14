interface IOperacaoMatematica {
  validar(): boolean;
  calcular(): number;
}

abstract class OperacaoMatematica implements IOperacaoMatematica {
  private _numero1: number;
  private _numero2: number;

  constructor(numero1: number, numero2: number) {
    this._numero1 = numero1;
    this._numero2 = numero2;
  }

  get numero1(): number {
    return this._numero1;
  }

  get numero2(): number {
    return this._numero2;
  }

  public validar(): boolean {
    return this._numero1 >= 0 && this._numero2 >= 0;
  }

  public calcular(): number {
    if (this.validar()) {
      return this.realizarCalculo();
    } else {
      return -1;
    }
  }

  protected abstract realizarCalculo(): number;
}

class Soma extends OperacaoMatematica {
  protected override realizarCalculo(): number {
    return this.numero1 + this.numero2;
  }
}

class Subtracao extends OperacaoMatematica {
  protected override realizarCalculo(): number {
    return this.numero1 - this.numero2;
  }
}

class Multiplicacao extends OperacaoMatematica {
  protected override realizarCalculo(): number {
    return this.numero1 * this.numero2;
  }
}

class Divisao extends OperacaoMatematica {
  public override validar(): boolean {
    return this.numero1 >= 0 && this.numero2 > 0;
  }

  protected override realizarCalculo(): number {
    return this.numero1 / this.numero2;
  }
}
