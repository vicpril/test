export default {
   getDesctption(full_name, degree = "", posts = [], orcid = "") {
      var desc = "";
      desc =
         '<span style="font-family: times new roman,times,serif;"><strong><span style="font-size: 18pt;">' +
         full_name +
         "</span></strong></span>";
      if (degree) {
         degree =
            '<span style="font-family: times new roman,times,serif;"><span style="font-size: 14pt;"><i><br>' +
            degree +
            "</i></span></span>";
         about = about + degree;
      }
      if (post.length > 0) {
         posts.forEach(post => {
            post =
               '<span style="font-family: times new roman,times,serif;"><span style="font-size: 14pt;"><i>,<br>' +
               post +
               "</i></span></span>";
            about = about + post;
         });
      }
      if (orcid) {
         orcid =
            '<span   style="font-family: times new roman,times,serif;"><span style="font-size: 14pt;"><br>ORCID: ' +
            orcid +
            "</span></span>";
         about = about + orcid;
      }

      return desc;
   }
};
