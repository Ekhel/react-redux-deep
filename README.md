![Flickr](https://live.staticflickr.com/65535/49756424827_a7a5c21b3c_b.jpg)

<p align="center">
    <h3>Praktek React + Redux dengan OAuth Google </h3>
</p>

----------------------------------------------------------------------------------------------------------

## Deskripsi Praktek :
* Applikasi Simple ini Menunjukan Lebih Dalam Tentang Arsitektur Redux, Menggunakan Redux Store dan Kemudian Membuat Action Creator dan Menginplementasikan Dalam Metode Autentikasi Google OAuth, GET, PUT, EDIT, DELETE API Menggunakan Redux Form, Menggunakan REST Conventions, Realtime Broadcasting dan Stream Vidio.
ini adalah Praktek Terbaik Untuk Menggunakan Redux.

-----------------------------------------------------------------------------------------------------------

## Library :

| Library           | Package Instalation                                                               |
| ---------------   | --------------------------------------------------------------------------------- |
| Redux             | *npm install --save redux*                                                        |
| React-Redux       | *npm install --save react-redux*                                                  |
| axios             | *npm install --save axios*                                                        |
| Redux-Form        | *npm install --save redux-form*                                                   |
| Redux-Thunk       | *npm install --save redux-thunk*                                                  |
| REDUX DEV TOOLS   | *extension browser untuk Redux state (Disesuikan dengan Browser)*                 |

--------------------------------------------------------------------------------------------------------------

## Soure Pendukung :
* API Key : ![Google Developers](https://console.developers.google.com)
  - Daftar Applikasi Anda untuk Mendapatkan OAuth CliendId disini.
  - Dan Ubah Kode *CLIENT ID* Pada file component/GoogleAuth.js dengan Client ID Anda.

  ```JSX
     componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: 'CLIENT ID',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();      

                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }
  ```

* API Services : ![json-server](https://www.npmjs.com/package/json-server)

