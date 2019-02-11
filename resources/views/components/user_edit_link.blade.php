@isset($user)
  <a href="{{ route('users.edit', $user->id) }}">{{ $user->displayName }}</a>
@endisset