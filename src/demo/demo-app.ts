import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import '../components/data-grid/lit-data-grid.js';

declare global {
    interface HTMLElementTagNameMap {
        'demo-app': DemoApp
    }
}

@customElement('demo-app')
export class DemoApp extends LitElement {
    static styles = css`
        :host {
            display: block;
        }
    `;

    render() {
        return html`
            <lit-data-grid></lit-data-grid>
        `;
    }
}
