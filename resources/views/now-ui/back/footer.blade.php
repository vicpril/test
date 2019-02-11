<footer class="footer">
  <div class="container">
    <div class="copyright" id="copyright">
      &copy;

      <a href="#" target="_blank">Viktor Prilepin</a>.
    </div>
  </div>
</footer>

@section('js')
@parent
      <script>
        document.getElementById('copyright').appendChild(document.createTextNode(new Date().getFullYear()))
      </script>, Coded by
@endsection