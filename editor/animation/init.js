//Dont change it
requirejs(['ext_editor_1', 'jquery_190', 'raphael_210'],
    function (ext, $, TableComponent) {

        var cur_slide = {};

        ext.set_start_game(function (this_e) {
        });

        ext.set_process_in(function (this_e, data) {
            cur_slide["in"] = data[0];
        });

        ext.set_process_out(function (this_e, data) {
            cur_slide["out"] = data[0];
        });

        ext.set_process_ext(function (this_e, data) {
            cur_slide.ext = data;
            this_e.addAnimationSlide(cur_slide);
            cur_slide = {};
        });

        ext.set_process_err(function (this_e, data) {
            cur_slide['error'] = data[0];
            this_e.addAnimationSlide(cur_slide);
            cur_slide = {};
        });

        ext.set_animate_success_slide(function (this_e, options) {
            var $h = $(this_e.setHtmlSlide('<div class="animation-success"><div></div></div>'));
            this_e.setAnimationHeight(115);
        });

        ext.set_animate_slide(function (this_e, data, options) {
            var $content = $(this_e.setHtmlSlide(ext.get_template('animation'))).find('.animation-content');
            if (!data) {
                console.log("data is undefined");
                return false;
            }

            var checkioInput = data.in || ["AF", 16];
            var inputStr = JSON.stringify(checkioInput[0]) + ", " + JSON.stringify(checkioInput[1]);

            if (data.error) {
                $content.find('.call').html('Fail: checkio(' + inputStr + ')');
                $content.find('.output').html(data.error.replace(/\n/g, ","));

                $content.find('.output').addClass('error');
                $content.find('.call').addClass('error');
                $content.find('.answer').remove();
                $content.find('.explanation').remove();
                this_e.setAnimationHeight($content.height() + 60);
                return false;
            }

            var rightResult = data.ext["answer"];
            var userResult = data.out;
            var result = data.ext["result"];
            var result_addon = data.ext["result_addon"];


            //if you need additional info from tests (if exists)
            var explanation = data.ext["explanation"];

            $content.find('.output').html('&nbsp;Your result:&nbsp;' + JSON.stringify(userResult));

            if (!result) {
                $content.find('.call').html('Fail: checkio(' + inputStr + ')');
                $content.find('.answer').html('Right result:&nbsp;' + JSON.stringify(rightResult));
                $content.find('.answer').addClass('error');
                $content.find('.output').addClass('error');
                $content.find('.call').addClass('error');
            }
            else {
                $content.find('.call').html('Pass: checkio(' + inputStr + ')');
                $content.find('.answer').remove();
            }
            //Dont change the code before it

            //Your code here about test explanation animation
            //$content.find(".explanation").html("Something text for example");
            //
            //
            //
            //
            //


            this_e.setAnimationHeight($content.height() + 60);

        });

        var $tryit;

        ext.set_console_process_ret(function (this_e, ret) {
            $tryit.find(".checkio-result").html("Your Result<br>" + ret);
        });

        ext.set_generate_animation_panel(function (this_e) {
            $tryit = $(this_e.setHtmlTryIt(ext.get_template('tryit'))).find('.tryit-content');
            $tryit.find('.bn-check').click(function (e) {
                e.preventDefault();
                var numb = $tryit.find(".number-input").val();
                if (isNaN(numb)) {
                    numb = 36;
                }
                else {
                    numb = Number(numb);
                }
                this_e.sendToConsoleCheckiO($tryit.find(".text-input").val(), numb);
                e.stopPropagation();
                return false;
            });

            var rWords = ["F0", "1111111111", "255", "IDDQD", "1000", "ASD", "222", "XYZ", "909", "1234567890", "5A6E", "1000000"];

            $tryit.find('.bn-random').click(function (e) {
                e.preventDefault();
                $tryit.find(".text-input").val(rWords[Math.floor(Math.random() * rWords.length)]);
                $tryit.find(".number-input").val(Math.floor(Math.random() * 34) + 2);


                return false;
            });
        });


    }
);
