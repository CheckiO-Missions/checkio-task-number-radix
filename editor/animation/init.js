requirejs(['ext_editor_io', 'jquery_190', 'raphael_210'],
    function (extIO, $, TableComponent) {
        var $tryit;
        var io = new extIO({
            functions: {
                js: 'numberRadix',
                python: 'checkio'
            },

            multipleArguments: true,

            tryit: function(this_e){
                $tryit = $(this_e.extSetHtmlTryIt(this_e.getTemplate('tryit')));

                var tryitNumberInput = $tryit.find('.tryit_number_input');
                var tryitTextInput = $tryit.find('.tryit_text_input');
                tryitNumberInput.focus();

                $tryit.find('.bn-check').click(function (e) {
                    var textInput = tryitTextInput.val();
                    var numberInput = tryitNumberInput.val();
                    if (isNaN(numberInput)) {
                        numberInput = 36;
                    }
                    else {
                        numberInput = Number(numberInput);
                    }
                    this_e.extSendToConsoleCheckiO(textInput, numberInput);
                    e.stopPropagation();
                    return false;
                });

                var rWords = ["F0", "1111111111", "255", "IDDQD", "1000", "ASD", "222", "XYZ", "909", "1234567890", "5A6E", "1000000"];
                $tryit.find('.bn-random').click(function (e) {
                    tryitNumberInput.val(Math.floor(Math.random() * 34) + 2);
                    tryitTextInput.val(rWords[Math.floor(Math.random() * rWords.length)]);
                    e.stopPropagation();
                    return false;
                });

            },

            retConsole: function (ret) {
                $tryit.find('.tryit_result').html("Your result:<br>" + ret);
            }

        });
        io.start();
    }
);
