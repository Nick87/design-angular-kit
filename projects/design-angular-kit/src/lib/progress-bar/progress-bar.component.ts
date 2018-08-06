import {
  Component,
  ChangeDetectionStrategy,
  ElementRef,
  Inject,
  Input,
  Optional,
  ViewEncapsulation
} from '@angular/core';
import { ThemeColor, THEME_COLORS } from '../models/ThemeColor';

let progressbarId = 0;

/**
 * Una barra di avanzamento con design bootstrap italia.
 */
@Component({
  selector: 'it-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProgressBarComponent {

  public static readonly PROGRESS_BAR_DEFAULT_MIN = 0;
  public static readonly PROGRESS_BAR_DEFAULT_MAX = 100;
  public static readonly PROGRESS_BAR_DEFAULT_VALUE = 0;
  public static readonly PROGRESS_BAR_DEFAULT_HEIGHT = 20;
  public static readonly PROGRESS_BAR_DEFAULT_LABEL = '';

  progressbarId = `it-progress-bar-${progressbarId++}`;

  /**
   * L'altezza della barra di avanzamento.
   */
  @Input()
  get height(): number { return this._height; }
  set height(v: number) { this._height = v; }
  private _height = ProgressBarComponent.PROGRESS_BAR_DEFAULT_HEIGHT;

  /**
   * Il valore minimo della barra di avanzamento.
   */
  @Input()
  get min(): number { return this._min; }
  set min(v: number) { this._min = Math.round(v); }
  private _min = ProgressBarComponent.PROGRESS_BAR_DEFAULT_MIN;

  /**
   * Il valore massimo della barra di avanzamento.
   */
  @Input()
  get max(): number { return this._max; }
  set max(v: number) { this._max = Math.round(v); }
  private _max = ProgressBarComponent.PROGRESS_BAR_DEFAULT_MAX;

  /**
   * L'attuale valore della barra di avanzamento.
   */
  @Input()
  get value(): number { return this._value; }
  set value(v: number) { this._value = Math.min(Math.max(v, this._min), this._max); }
  private _value = ProgressBarComponent.PROGRESS_BAR_DEFAULT_VALUE;

  /**
   * L'etichetta della barra di avanzamento.
   */
  @Input()
  get label(): string { return this._label; }
  set label(v: string) { this._label = v; }
  private _label = ProgressBarComponent.PROGRESS_BAR_DEFAULT_LABEL;

  /**
   * Il colore della barra di avanzamento.
   */
  @Input()
  get color(): any {
    return this._color;
  }
  set color(value: any) {
    if (ThemeColor.is(value)) {
      this._color = value;
    } else {
      this._color = THEME_COLORS.PRIMARY;
    }
  }
  private _color = THEME_COLORS.PRIMARY;

  valuePercentage(): number {
    return ((this.value - this.min) * 100) / (this.max - this.min);
  }

  pgStyle() {
    return { 'width' : this.valuePercentage() + '%' };
  }

  pgClass() {
    const progressbarClass = { 'progress-bar' : true };
    if (this.color) {
      progressbarClass[`bg-${this.color}`] = true;
    }
    return progressbarClass;
  }

  constructor() { }

}
