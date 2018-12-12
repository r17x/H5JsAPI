/**
 * @unAuthor {ri7nz} github.com/ri7nz
 * Mari Kita Belajar Ferguzo
 * Kebanyakan warga JSetijen memakai Framework
 * tanpa mempelajari hal sederhana yang sebenarnya
 * menjadi kewajiban utama para "WEB DEV" walau hanya
 * sekedar tau tentang HTML 5 JavascriptAPI.
 *
 * NOW Playing : Stairway To Heaven - Led Zebelin
 *
 * @class bodyAccess
 * @desciption bagaimana ferguzo dapat menyentuh badan
 * halus dari tikus yang nakal.
 *
 * @story
 * dahulu kala kita senang menggunakan uang dollar $
 * example: 
 * - $("body").hasClass('LedZebelin');
 * - $("body").removeClass('LedZebelin');
 * Nah? bagaimana kalau dollar turun? 
 * berikut investasi bodong yang dapat kamu pakai.
 * #HappySarcasm
 * #SaveJQUERY
 */

class bodyAccess {
  /**
   * @body {object} HTMLBodyElement
   * @unAuthor {ri7nz} github.com/ri7nz
   */
  body = document.body;

  /**
   * @params {string} className
   * @return {boolean}
   */
  hasClass(className) {
    return this.body.classList.contains(className);
  }

  /**
   * @params {string} className
   * @return {object} DOMTokenList
   */
  removeClass(className) {
    this.body.classList.remove(className);
    return this.body.classList;
  }

  /**
   * @params {string} className
   * @return {object} DOMTokenList
   */
  addClass(className) {
    this.body.classList.add(className);
    return this.body.classList;
  }
}

/**
 * Bagi Siapa Saja yang Melihat Gambar ini 
 * saya minta tolong di berikan pencerahan 
 * bagaimana melakukan extends terhadap HTMLBodyElement
 * dan sodara - sodaranya
 */
