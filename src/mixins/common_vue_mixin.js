
import axios from 'axios';
export default {

  created() {
    // Axiosのヘッダをここで設定する。
    axios.defaults.headers.common = {
      'X-Requested-With': 'XMLHttpRequest',
      'Content-Type': 'application/json',
    };
    axios.defaults.withCredentials = true;
  },
  methods: {
    // InputBoxの選択をする。
    selectId(idString) {
      document.getElementById(idString).select();
    },
    // 数値以外入力できなくする
    validateNum(e) {
      const charCode = e.which ? e.which : e.keyCode;
      if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        // 数字入力のみ許可する
        e.preventDefault();
      } else {
        return true;
      }
    },
    format(val) {
      // なにもない？
      if (!val) {
        return '';
      }
      // 全角半角数字リプレース
      // 文字コードから0xFEE0引けば半角になる。
      val = val.replace(/[０-９]/g, function(s) {
        return String.fromCharCode(s.charCodeAt(0) - 0xfee0);
      });
      const replaced = val.replace(/\D/g, ''); // 数字以外を除去
      return replaced || '';
    },

  },
};
