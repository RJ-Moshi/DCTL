<div class="sidebar" data-color="rose" data-background-color="black" data-image="{{ asset('custom') }}/pics/bonds2.jpg">
  <div class="logo">
    <a href="http://www.creative-tim.com" class="simple-text logo-mini">
      {{ __('CT') }}
    </a>
    <a href="http://www.creative-tim.com" class="simple-text logo-normal">
      {{ __('Creative Tim') }}
    </a>
  </div>
  <div class="sidebar-wrapper">
    <div class="user">
      <div class="photo">
        <img src="{{ auth()->user()->profilePicture() }}" />
      </div>
      <div class="user-info">
        <a data-toggle="collapse" href="#collapseExample" class="username">
          <span>
            {{ auth()->user()->name }}
            <b class="caret"></b>
          </span>
        </a>
        <div class="collapse" id="collapseExample">
          <ul class="nav">
            <li class="nav-item">
              <a class="nav-link" href="{{ route('profile.edit') }}">
                <span class="sidebar-mini"> MP </span>
                <span class="sidebar-normal"> My Profile </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <ul class="nav">
      <li class="nav-item{{ $activePage == 'dashboard' ? ' active' : '' }}">
        <a class="nav-link" href="{{ route('home') }}">
          <i class="fa fa-home material-icons"></i>
            <p>{{ __('Dashboard') }}</p>
        </a>
      </li>
      <li class="nav-item {{ ($menuParent == 'settings' || $activePage == 'settings') ? ' active' : '' }}">
        <a class="nav-link" data-toggle="collapse" href="#settings" {{ ($menuParent == 'settings' || $activePage == 'settings') ? ' aria-expanded="true"' : '' }}>
            <i class="fa fa-group material-icons"></i>
          <p>{{ __('Users Management') }}
            <b class="caret"></b>
          </p>
        </a>
        <div class="collapse {{ ($menuParent == 'settings' || $menuParent == 'settings') ? ' show' : '' }}" id="settings">
          <ul class="nav">
            {{-- @can('manage-users', App\User::class)
              <li class="nav-item{{ $activePage == 'role-management' ? ' active' : '' }}">
                <a class="nav-link" href="{{ route('role.index') }}">
                  <span class="sidebar-mini"> RM </span>
                  <span class="sidebar-normal"> {{ __('Role Management') }} </span>
                </a>
              </li>
            @endcan --}}
              <li class="nav-item{{ $activePage == 'user-management' ? ' active' : '' }}">
                <a class="nav-link" href="{{ route('user.index') }}">
                    <i class="fas fa-user-tie material-icons"></i>
                  <span class="sidebar-normal"> {{ __('Staffs') }} </span>
                </a>
              </li>
              <li class="nav-item{{ $activePage == 'user-management' ? ' active' : '' }}">
                <a class="nav-link" href="{{ route('user.index') }}">
                    <i class="fa fa-group material-icons"></i>
                  <span class="sidebar-normal"> {{ __('Drivers') }} </span>
                </a>
              </li>

          </ul>
        </div>
      </li>

      <li class="nav-item {{ ($menuParent == 'truck-management' || $activePage == 'truck-management') ? ' active' : '' }}">
        <a class="nav-link" data-toggle="collapse" href="#truck-management" {{ ($menuParent == 'truck-management' || $activePage == 'truck-management') ? ' aria-expanded="true"' : '' }}>
            <i class="fa fa-truck material-icons"></i>
          <p>{{ __('Trucks Management') }}
            <b class="caret"></b>
          </p>
        </a>
        <div class="collapse {{ ($menuParent == 'truck-management' || $menuParent == 'truck-management') ? ' show' : '' }}" id="truck-management">
          <ul class="nav">
              <li class="nav-item{{ $activePage == 'user-management' ? ' active' : '' }}">
                <a class="nav-link" href="{{ route('user.index') }}">
                    <i class="material-icons">
                        forklift
                        </i>
                  <span class="sidebar-normal"> {{ __('Horses') }} </span>
                </a>
              </li>
              <li class="nav-item{{ $activePage == 'user-management' ? ' active' : '' }}">
                <a class="nav-link" href="{{ route('user.index') }}">
                <i class="fas fa-trailer material-icons"></i>
                  <span class="sidebar-normal"> {{ __('Trailers') }} </span>
                </a>
              </li>
              <li class="nav-item{{ $activePage == 'user-management' ? ' active' : '' }}">
                <a class="nav-link" href="{{ route('user.index') }}">
                    <i class="fa fa-truck material-icons"></i>
                  <span class="sidebar-normal"> {{ __('Truck Parts') }} </span>
                </a>
              </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</div>
