class Main {
    private _myf:MyFramework;

    main(): void {
        this._myf = new MyFramework();
        let b:HTMLElement = this._myf.getElementById("boton");
        console.log(b);
        b.textContent = "Haceme click!";
    }
}

window.onload = () => {
    let m:Main = new Main();
    m.main();
};