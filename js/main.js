class Main {
    main() {
        this._myf = new MyFramework();
        let b = this._myf.getElementById("boton");
        console.log(b);
        b.textContent = "Haceme click!";
    }
}
window.onload = () => {
    let m = new Main();
    m.main();
};
