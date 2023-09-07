demo = {

  initDateTimePicker: function() {
    $('.datetimepicker').datetimepicker({
      icons: {
        time: "fa fa-clock-o",
        date: "fa fa-calendar",
        up: "fa fa-chevron-up",
        down: "fa fa-chevron-down",
        previous: 'fa fa-chevron-left',
        next: 'fa fa-chevron-right',
        today: 'fa fa-screenshot',
        clear: 'fa fa-trash',
        close: 'fa fa-remove'
      }
    });
  },


  initMaterialWizard: function() {
    // Code for the Validator
    var $validator = $('.card-wizard form').validate({
      rules: {
        firstname: {
          required: true,
          minlength: 3
        },
        lastname: {
          required: true,
          minlength: 3
        },
        email: {
          required: true,
          minlength: 3,
        }
      },

      highlight: function(element) {
        $(element).closest('.form-group').removeClass('has-success').addClass('has-danger');
      },
      success: function(element) {
        $(element).closest('.form-group').removeClass('has-danger').addClass('has-success');
      },
      errorPlacement: function(error, element) {
        $(element).append(error);
      }
    });



    // Wizard Initialization
    $('.card-wizard').bootstrapWizard({
    //   'tabClass': 'nav nav-pills',
      'nextSelector': '.btn-next',
      'previousSelector': '.btn-previous',

      onNext: function(tab, navigation, index) {
        var $valid = $('.card-wizard form').valid();
        if (!$valid) {
          $validator.focusInvalid();
          return false;
        }
      },

      onInit: function(tab, navigation, index) {
        //check number of tabs and fill the entire row
        var $total = navigation.find('li').length;
        var $wizard = navigation.closest('.card-wizard');

        $first_li = navigation.find('li:first-child a').html();
        $moving_div = $('<div class="moving-tab">' + $first_li + '</div>');
        $('.card-wizard .wizard-navigation').append($moving_div);

        refreshAnimation($wizard, index);

        $('.moving-tab').css('transition', 'transform 0s');
      },

      onTabClick: function(tab, navigation, index) {
        var $valid = $('.card-wizard form').valid();

        if (!$valid) {
          return false;
        } else {
          return true;
        }
      },

      onTabShow: function(tab, navigation, index) {
        var $total = navigation.find('li').length;
        var $current = index + 1;

        var $wizard = navigation.closest('.card-wizard');

        // If it's the last tab then hide the last button and show the finish instead
        if ($current >= $total) {
          $($wizard).find('.btn-next').hide();
          $($wizard).find('.btn-finish').show();
        } else {
          $($wizard).find('.btn-next').show();
          $($wizard).find('.btn-finish').hide();
        }

        button_text = navigation.find('li:nth-child(' + $current + ') a').html();

        setTimeout(function() {
          $('.moving-tab').text(button_text);
        }, 150);

        var checkbox = $('.footer-checkbox');

        if (!index == 0) {
          $(checkbox).css({
            'opacity': '0',
            'visibility': 'hidden',
            'position': 'absolute'
          });
        } else {
          $(checkbox).css({
            'opacity': '1',
            'visibility': 'visible'
          });
        }

        refreshAnimation($wizard, index);
      }
    });


    // Prepare the preview for profile picture
    $("#wizard-picture").change(function() {
      readURL(this);
    });

    $('[data-toggle="wizard-radio"]').click(function() {
      wizard = $(this).closest('.card-wizard');
      wizard.find('[data-toggle="wizard-radio"]').removeClass('active');
      $(this).addClass('active');
      $(wizard).find('[type="radio"]').removeAttr('checked');
      $(this).find('[type="radio"]').attr('checked', 'true');
    });

    $('[data-toggle="wizard-checkbox"]').click(function() {
      if ($(this).hasClass('active')) {
        $(this).removeClass('active');
        $(this).find('[type="checkbox"]').removeAttr('checked');
      } else {
        $(this).addClass('active');
        $(this).find('[type="checkbox"]').attr('checked', 'true');
      }
    });

    $('.set-full-height').css('height', 'auto');

    //Function to show image before upload

    function readURL(input) {
      if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function(e) {
          $('#wizardPicturePreview').attr('src', e.target.result).fadeIn('slow');
        }
        reader.readAsDataURL(input.files[0]);
      }
    }

    $(window).resize(function() {
      $('.card-wizard').each(function() {
        $wizard = $(this);

        index = $wizard.bootstrapWizard('currentIndex');
        refreshAnimation($wizard, index);

        $('.moving-tab').css({
          'transition': 'transform 0s'
        });
      });
    });

    function refreshAnimation($wizard, index) {
      $total = $wizard.find('.nav li').length;
      $li_width = 100 / $total;

      total_steps = $wizard.find('.nav li').length;
      move_distance = $wizard.width() / total_steps;
      index_temp = index;
      vertical_level = 0;

      mobile_device = $(document).width() < 600 && $total > 3;

      if (mobile_device) {
        move_distance = $wizard.width() / 2;
        index_temp = index % 2;
        $li_width = 50;
      }

      $wizard.find('.nav li').css('width', $li_width + '%');

      step_width = move_distance;
      move_distance = move_distance * index_temp;

      $current = index + 1;

      if ($current == 1 || (mobile_device == true && (index % 2 == 0))) {
        move_distance -= 8;
      } else if ($current == total_steps || (mobile_device == true && (index % 2 == 1))) {
        move_distance += 8;
      }

      if (mobile_device) {
        vertical_level = parseInt(index / 2);
        vertical_level = vertical_level * 38;
      }

      $wizard.find('.moving-tab').css('width', step_width);
      $('.moving-tab').css({
        'transform': 'translate3d(' + move_distance + 'px, ' + vertical_level + 'px, 0)',
        'transition': 'all 0.5s cubic-bezier(0.29, 1.42, 0.79, 1)'

      });
    }
  },

  initCharts: function() {
    if ($('#roundedLineChart').length != 0 && $('#straightLinesChart').length != 0 && $('#colouredRoundedLineChart').length != 0 && $('#colouredBarsChart').length != 0 && $('#simpleBarChart').length != 0 && $('#multipleBarsChart').length != 0) {
      /* ----------==========    Rounded Line Chart initialization    ==========---------- */

      dataRoundedLineChart = {
        labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
        series: [
          [12, 17, 7, 17, 23, 18, 38]
        ]
      };

      optionsRoundedLineChart = {
        lineSmooth: Chartist.Interpolation.cardinal({
          tension: 10
        }),
        axisX: {
          showGrid: false,
        },
        low: 0,
        high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
        chartPadding: {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0
        },
        showPoint: false
      }

      var RoundedLineChart = new Chartist.Line('#roundedLineChart', dataRoundedLineChart, optionsRoundedLineChart);

      md.startAnimationForLineChart(RoundedLineChart);


      /*  **************** Straight Lines Chart - single line with points ******************** */

      dataStraightLinesChart = {
        labels: ['\'07', '\'08', '\'09', '\'10', '\'11', '\'12', '\'13', '\'14', '\'15'],
        series: [
          [10, 16, 8, 13, 20, 15, 20, 34, 30]
        ]
      };

      optionsStraightLinesChart = {
        lineSmooth: Chartist.Interpolation.cardinal({
          tension: 0
        }),
        low: 0,
        high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
        chartPadding: {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0
        },
        classNames: {
          point: 'ct-point ct-white',
          line: 'ct-line ct-white'
        }
      }

      var straightLinesChart = new Chartist.Line('#straightLinesChart', dataStraightLinesChart, optionsStraightLinesChart);

      md.startAnimationForLineChart(straightLinesChart);


      /*  **************** Coloured Rounded Line Chart - Line Chart ******************** */


      dataColouredRoundedLineChart = {
        labels: ['\'06', '\'07', '\'08', '\'09', '\'10', '\'11', '\'12', '\'13', '\'14', '\'15'],
        series: [
          [287, 480, 290, 554, 690, 690, 500, 752, 650, 900, 944]
        ]
      };

      optionsColouredRoundedLineChart = {
        lineSmooth: Chartist.Interpolation.cardinal({
          tension: 10
        }),
        axisY: {
          showGrid: true,
          offset: 40
        },
        axisX: {
          showGrid: false,
        },
        low: 0,
        high: 1000,
        showPoint: true,
        height: '300px'
      };


      var colouredRoundedLineChart = new Chartist.Line('#colouredRoundedLineChart', dataColouredRoundedLineChart, optionsColouredRoundedLineChart);

      md.startAnimationForLineChart(colouredRoundedLineChart);


      /*  **************** Coloured Rounded Line Chart - Line Chart ******************** */


      dataColouredBarsChart = {
        labels: ['\'06', '\'07', '\'08', '\'09', '\'10', '\'11', '\'12', '\'13', '\'14', '\'15'],
        series: [
          [287, 385, 490, 554, 586, 698, 695, 752, 788, 846, 944],
          [67, 152, 143, 287, 335, 435, 437, 539, 542, 544, 647],
          [23, 113, 67, 190, 239, 307, 308, 439, 410, 410, 509]
        ]
      };

      optionsColouredBarsChart = {
        lineSmooth: Chartist.Interpolation.cardinal({
          tension: 10
        }),
        axisY: {
          showGrid: true,
          offset: 40
        },
        axisX: {
          showGrid: false,
        },
        low: 0,
        high: 1000,
        showPoint: true,
        height: '300px'
      };


      var colouredBarsChart = new Chartist.Line('#colouredBarsChart', dataColouredBarsChart, optionsColouredBarsChart);

      md.startAnimationForLineChart(colouredBarsChart);



      /*  **************** Public Preferences - Pie Chart ******************** */

      var dataPreferences = {
        labels: ['62%', '32%', '6%'],
        series: [62, 32, 6]
      };

      var optionsPreferences = {
        height: '230px'
      };

      Chartist.Pie('#chartPreferences', dataPreferences, optionsPreferences);

      /*  **************** Simple Bar Chart - barchart ******************** */

      var dataSimpleBarChart = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        series: [
          [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895]
        ]
      };

      var optionsSimpleBarChart = {
        seriesBarDistance: 10,
        axisX: {
          showGrid: false
        }
      };

      var responsiveOptionsSimpleBarChart = [
        ['screen and (max-width: 640px)', {
          seriesBarDistance: 5,
          axisX: {
            labelInterpolationFnc: function(value) {
              return value[0];
            }
          }
        }]
      ];

      var simpleBarChart = Chartist.Bar('#simpleBarChart', dataSimpleBarChart, optionsSimpleBarChart, responsiveOptionsSimpleBarChart);

      //start animation for the Emails Subscription Chart
      md.startAnimationForBarChart(simpleBarChart);


      var dataMultipleBarsChart = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        series: [
          [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895],
          [412, 243, 280, 580, 453, 353, 300, 364, 368, 410, 636, 695]
        ]
      };

      var optionsMultipleBarsChart = {
        seriesBarDistance: 10,
        axisX: {
          showGrid: false
        },
        height: '300px'
      };

      var responsiveOptionsMultipleBarsChart = [
        ['screen and (max-width: 640px)', {
          seriesBarDistance: 5,
          axisX: {
            labelInterpolationFnc: function(value) {
              return value[0];
            }
          }
        }]
      ];

      var multipleBarsChart = Chartist.Bar('#multipleBarsChart', dataMultipleBarsChart, optionsMultipleBarsChart, responsiveOptionsMultipleBarsChart);

      //start animation for the Emails Subscription Chart
      md.startAnimationForBarChart(multipleBarsChart);
    }

  },


}
