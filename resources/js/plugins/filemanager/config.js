//Source: https://github.com/alexusmai/vue-laravel-file-manager

export default {
  // not required params
//     headers: {'Authorization': 'Bearer ...'}, // add header
    // OR
    headers: {'X-CSRF-TOKEN': 'token'}, // overwrite default header Axios
//     baseUrl: 'http://my_url:80/file-manager/', // overwrite base url Axios
    windowsConfig: 1,
    lang: 'de',     // set language
}