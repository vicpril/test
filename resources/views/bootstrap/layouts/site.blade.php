<!-- HEADER -->
  @yield('header')
<!-- END HEADER -->

    <!-- <div class="clearfix"></div> -->
   <main role="main" class="container">
      <div class="row">
         <!-- CONTENT -->
            @yield('content')
         <!-- END CONTENT -->

         <!-- SIDEBAR -->
            <!-- @yield('sidebar') -->
         <!-- END SIDEBAR -->
      </div>
   </main>
   <!-- FOOTER -->
      @yield('footer')
   <!-- END FOOTER -->

    <!-- Bootstrap core JavaScript
      ================================================== -->
      <!-- Placed at the end of the document so the pages load faster -->
      <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
      <script>window.jQuery || document.write('<script src="{{ asset(env("THEME")) }}/assets/js/vendor/jquery-slim.min.js"><\/script>')</script>
      <script src="{{ asset(env('THEME')) }}/assets/js/vendor/popper.min.js"></script>
      <script src="/js/bootstrap.min.js"></script>
      <script src="{{ asset(env('THEME')) }}/assets/js/vendor/holder.min.js"></script>
      <script>
        Holder.addTheme('thumb', {
          bg: '#55595c',
          fg: '#eceeef',
          text: 'Thumbnail'
        });
      </script>
    </body>
    </html>
