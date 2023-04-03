import {Component, ViewEncapsulation} from '@angular/core';
import SwiperCore, {Navigation, Pagination} from 'swiper';

SwiperCore.use([Navigation, Pagination])
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  private btn: any;
  mouseEnter(event: { pageX: number; pageY: number; }){
    this.btn = document.querySelector('.ripple__btn');
    const x = event.pageX - this.btn.offsetLeft;
    const y = event.pageY - this.btn.offsetTop;
    this.btn.style.setProperty('--x', x + 'px')
    this.btn.style.setProperty('--y', y + 'px')
    console.log('enter')
  }
  title = 'YANRE';
}
