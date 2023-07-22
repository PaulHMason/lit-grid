import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';

declare global {
    interface HTMLElementTagNameMap {
        'lit-data-grid': LitDataGrid
    }
}

@customElement('lit-data-grid')
export class LitDataGrid extends LitElement {
    static styles = css`
        :host {
            display: block;
        }
    `;

    render() {
        return html`
            <div>lit-data-grid</div>
        `;
    }
}
