@extends('layouts.app', ['activePage' => 'item-management', 'menuParent' => 'laravel', 'titlePage' => __('Item Management')])

@section('content')
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12">
            <div class="card">
              <div class="card-header card-header-rose card-header-icon">
                <div class="card-icon">
                  <i class="material-icons">filter_none</i>
                </div>
                <h4 class="card-title">{{ __('Items') }}</h4>
              </div>
              <div class="card-body">
                @can('create', App\Item::class)
                  <div class="row">
                    <div class="col-12 text-right">
                      <a href="{{ route('item.create') }}" class="btn btn-sm btn-rose">{{ __('Add Item') }}</a>
                    </div>
                  </div>
                @endcan
                <div class="table-responsive m-0 w-100" id="items-table" style="overflow: hidden;">
                  <table id="datatables" class="table table-striped table-no-bordered table-hover" style="display:none">
                    <thead class="text-primary">
                      <th class="desktop">
                          {{ __('Name') }}
                      </th>
                      <th class="desktop">
                        {{ __('Category') }}
                      </th>
                      <th class="desktop">
                        {{ __('Picture') }}
                      </th>
                      <th class="desktop">
                        {{ __('Tags') }}
                      </th>
                      <th class="desktop">
                        {{ __('Creation date') }}
                      </th>
                      @can('manage-items', App\User::class)
                        <th class="text-right desktop">
                          {{ __('Actions') }}
                        </th>
                      @endcan
                    </thead>
                    <tbody>
                      @foreach($items as $item)
                        <tr>
                          <td>
                            {{ $item->name }}
                          </td>
                          <td>
                            {{ $item->category->name }}
                          </td>
                          <td>
                            <img src="{{ $item->path() }}" alt="" style="max-width: 125px;">
                          </td>
                          <td>
                            @foreach ($item->tags as $tag)
                                <span class="badge badge-default" style="background-color:{{ $tag->color }}">{{ $tag->name }}</span>
                            @endforeach
                          </td>
                          <td>
                            {{ $item->created_at->format('Y-m-d') }}
                          </td>
                          @can('manage-items', App\User::class)
                            <td class="td-actions text-right">
                              <form action="{{ route('item.destroy', $item) }}" method="post">
                                  @csrf
                                  @method('delete')
                                  
                                  @can('update', $item)
                                    <a rel="tooltip" class="btn btn-success btn-link" href="{{ route('item.edit', $item) }}" data-original-title="" title="">
                                      <i class="material-icons">edit</i>
                                      <div class="ripple-container"></div>
                                    </a>
                                  @endcan
                                  @can('delete', $item)
                                    <button type="button" class="btn btn-danger btn-link" data-original-title="" title="" onclick="confirm('{{ __("Are you sure you want to delete this user?") }}') ? this.parentElement.submit() : ''">
                                        <i class="material-icons">close</i>
                                        <div class="ripple-container"></div>
                                    </button>
                                  @endcan
                              </form>
                            </td>
                          @endcan
                        </tr>
                      @endforeach
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  </div>
@endsection

@push('js')
  <script>
    $(document).ready(function() {
      $('#datatables').fadeIn(1100);
      $('#datatables').DataTable({
        "pagingType": "full_numbers",
        "lengthMenu": [
          [10, 25, 50, -1],
          [10, 25, 50, "All"]
        ],
        responsive: {
          breakpoints: [
            { name: 'desktop', width: Infinity },
            { name: 'tablet',  width: 1024 },
            { name: 'fablet',  width: 768 },
            { name: 'phone',   width: 480 }
          ]
        },
        language: {
          search: "_INPUT_",
          searchPlaceholder: "Search items",
        },
        "columnDefs": [
          { "orderable": false, "targets": 5 },
        ],
      });
    });
  </script>
@endpush