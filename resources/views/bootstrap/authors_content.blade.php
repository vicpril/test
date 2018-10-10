@if($users)
   <h3 class="pb-3 mb-4 font-italic border-bottom">
      Наши авторы
   </h3>

   <div class="blog-post">
      <form>
        <div class="form-row align-items-center">
          <div class="col-md-6">
            <label class="sr-only" for="inlineFormInputGroup">Username</label>
            <div class="input-group mb-2">
              <div class="input-group-prepend">
                <div class="input-group-text"><i class="fas fa-search"></i></div>
              </div>
              <input type="text" class="form-control" id="inlineFormInputGroup" placeholder="Поиск">
            </div>
          </div>
        </div>
      </form>

         @foreach($users as $rows)
            <div class="row">
                  @foreach($rows as $user)
                     <div class="col-md-{{ 12 / Config::get('settings.authors_columns_count') }}">
                        <a href="{{ route('authors.show', ['alias' => $user->alias]) }}">{{ $user->name }}</a>
                        <span> ({{ $user->articles->count() }})</span>
                     </div>
                  @endforeach
            </div>
            @endforeach  
      
   </div>

  

@else

   <h3>Авторов в базе не найдено</h3>

@endif

<script src="{{ asset(env('THEME')) }}/assets/js/authors_search.js"></script>

