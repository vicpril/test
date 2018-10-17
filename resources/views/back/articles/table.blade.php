@foreach($articles as $article)
    <tr>
        <td>{!! Html::link(route('articles.edit', ['id' => $article->id ]), $article->title()) !!}

        </td>
        
        <td>
            <ul class="clear">
                @foreach($article->users as $user)
                    <li>{{ $user->short_name }}</li>
                @endforeach
                
            </ul>
        </td>
        
        <td>
            <input type="checkbox" name="status" value="{{ $article->id }}" class="icheckbox_flat-green" {{ $article->status->name === 'public' ? 'checked' : ''}}>
        </td>

        <td>{{ $article->issue->year }}</td>
        <td>{{ $article->issue->no }}</td>
        <td>{{ $article->issue->tom }}</td>
        <!-- <td>
            <input type="checkbox" name="seen" value="{{ $article->id }}" {{ is_null($article->ingoing) ?  'disabled' : 'checked'}}>
        </td> -->
        <!-- <td>{{-- $article->seo_title --}}</td> -->
        <td><a class="btn btn-success btn-xs btn-block" href="{{ route('article', ['article' => $article->alias]) }}" role="button" title="@lang('Show')"><span class="fa fa-eye"></span></a></td>
        <!-- {{--<td><a class="btn btn-warning btn-xs btn-block" href="{{ route('articles.edit', [$article->id]) }}" role="button" title="@lang('Edit')"><span class="fa fa-edit"></span></a></td>--}} -->
        <td>
            {!! Form::open(['url' => route('articles.destroy', ['articles'=>$article->id]), 'class'=>' ','method'=>'POST']) !!}
            {{ method_field('DELETE') }}
            {!! Form::button( __('Destroy'), ['class' => 'btn btn-danger btn-xs btn-block','type' =>'submit']) !!}
            {!! Form::close() !!}
            <!-- <a method="DELETE" class="btn btn-danger btn-xs btn-block" href="{{-- route('articles.destroy', [$article->id]) --}}" role="button" title="@lang('Destroy')"><span class="fa fa-remove"></span></a> -->

        </td>
    </tr>
@endforeach

