class Queue<T> {
    private mangPhanTu: T[] = [];

    them(phanTu: T): void {
        this.mangPhanTu.push(phanTu);
    }

    lay(): T | undefined {
        if (this.khongRong()) {
            return this.mangPhanTu.shift();
        }
        return undefined;
    }

    kichThuoc(): number {
        return this.mangPhanTu.length;
    }

    khongRong(): boolean {
        return this.mangPhanTu.length > 0;
    }
}

const hangDoiSo = new HangDoi<number>();
hangDoiSo.them(1);
hangDoiSo.them(2);
const phanTuDau = hangDoiSo.lay(); // 1

const hangDoiChuoi = new HangDoi<string>();
hangDoiChuoi.them("apple");
hangDoiChuoi.them("banana");
const phanTuDauChuoi = hangDoiChuoi.lay(); //"apple"