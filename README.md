# Webshop Backend - API Dokumentáció

A Webshop Backend a FakeStore webáruház adatbázis-kezeléséért és az üzleti logikáért felelős RESTful API. A projekt célja a megbízható adatkapcsolat biztosítása a frontend (Fakestore2) számára.

## A dokumentációról

A fejlesztői dokumentáció a forráskód alapján, automatikusan készül a **JSDoc** és a **docdash** sablon segítségével.

### JSDoc Annotációk a kódban

A megfelelő dokumentáció generálásához a kód (pl. controllerek, modellek) annotációkkal van ellátva az `src` mappán belül.

**Példa egy Backend Controller dokumentálására:**

```javascript
/**
 * @class ProductController
 * @classdesc A termékekkel kapcsolatos szerveroldali (backend) kéréseket kezelő osztály.
 */
class ProductController {
    /**
     * Lekéri az összes terméket az adatbázisból.
     * @param {Object} req - Az Express request objektum.
     * @param {Object} res - Az Express response objektum.
     * @returns {Promise<void>} JSON formátumban visszaadja a termékek listáját (HTTP 200).
     */
    static async getAllProducts(req, res) {
        // Logika helye...
    }
}