import { Injectable, ComponentFactoryResolver, ApplicationRef, Injector, ComponentRef } from '@angular/core';
import { CommunionimgModalComponent } from './communionimg-modal.component';

@Injectable({
  providedIn: 'root'
})
export class CommunionimgModalService {
  private componentRef: ComponentRef<CommunionimgModalComponent> | null = null;;
  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector
  ) {}

  open(imageSrc: string): void {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(CommunionimgModalComponent);
    this.componentRef = componentFactory.create(this.injector);

    this.componentRef.instance.imageSrc = imageSrc;
    this.appRef.attachView(this.componentRef.hostView);

    const domElem = (this.componentRef.hostView as any).rootNodes[0] as HTMLElement;
    document.body.appendChild(domElem);
  }

  close(): void {
    if (this.componentRef) {
      this.appRef.detachView(this.componentRef.hostView);
      this.componentRef.destroy();
      this.componentRef = null;
    }
  }
}
