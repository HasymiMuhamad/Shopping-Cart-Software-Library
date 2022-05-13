
class Cart {

    constructor(productName, quantity) {
      this.productName = productName;
      this.quantity = quantity;
      this.cartCollection = [];
    }

    tambahProduk(productName, quantity) {
      let isItemAvailable = this.cartCollection.filter(
        item => item.productName === productName
      );
      if (isItemAvailable.length !== 0) {
        isItemAvailable[0].quantity = isItemAvailable[0].quantity + quantity
      } else {
          this.cartCollection.push({
            productName : productName,
            quantity : quantity
          })
      }
      return this.cartCollection;
    }

    hapusProduk(productName, quantity) {
        let dataStay = [];
        this.cartCollection.filter( item => {
          if (item.productName !== productName) {
            dataStay.push(item)
          } else {
              if (quantity) {
                  if (item.quantity !== quantity) {
                    dataStay.push({
                        productName : item.productName,
                        quantity : item.quantity - quantity
                    })
                  }
              }
          }
      })
      return this.cartCollection = dataStay;
    }

    tampilkanCart() {
        this.cartCollection.map(item => {
            console.log(`${item.productName} (${item.quantity})`)
        })
    }
  }

  let keranjang = new Cart()
  keranjang.tambahProduk("Pisang Hijau", 2)
  keranjang.tambahProduk("Semangka Kuning", 3)
  keranjang.tambahProduk("Apel Merah", 1)
  keranjang.tambahProduk("Apel Merah", 4)
  keranjang.tambahProduk("Apel Merah", 2)

  keranjang.hapusProduk("Semangka Kuning")
  keranjang.hapusProduk("Semangka Merah")

  keranjang.tampilkanCart()
