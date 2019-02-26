@isset($user)
  <a href="{{ route('users.edit', $user->id) }}">{{ $user->ru->shortName }}</a>
@endisset