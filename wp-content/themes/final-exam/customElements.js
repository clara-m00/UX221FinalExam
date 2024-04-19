class CopyrightYear extends HTMLElement{
    connectedCallback(){
        this.innerHTML = new Date().getFullYear();
    }
}

customElements.define("x-year", CopyrightYear);

class TwoSidedMarket extends HTMLElement{
	connectedCallback(){
		this.innerHTML = `<a href="products">Shop our Products</a>&nbsp;&nbsp;&nbsp;<a href="registration">Registration to become a Kit Maker!</a>`;
	}
}

customElements.define("x-twosided", TwoSidedMarket);