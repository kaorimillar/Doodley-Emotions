



$(document).ready(function(){

  
	play_audio();
	
	function play_audio() {

		var current_song = 0;

		$("#audio_player")[0].src = $("#audio_playlist li a")[0];

		$("#audio_playlist li a").click(function(e) {
			e.preventDefault();
			$("#audio_player")[0].src = this;
			$("#audio_playlist li").removeClass("current-song");

			current_song = $(this).parent().index();
			$(this).parent().addClass("current-song");
		});
	}	

	play_video();
			
	function play_video() {

		var current_video = 0;

		$("#video_player")[0].src = $("#video_playlist li a")[0];

		$("#video_playlist li a").click(function(e) {
			e.preventDefault();
			$("#video_player")[0].src = this;
			$("#video_playlist li").removeClass("current-video");

			current_video = $(this).parent().index();
			$(this).parent().addClass("current-video");
		});
	}

});

		
