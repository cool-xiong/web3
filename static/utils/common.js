import {
	saveBaseFile
} from "@/config/api/index.js"
import {
	config
} from "@/config/config.js"
//图片上传转base64
function imageupload() {
	return new Promise((resolve, reject) => {
		const input = document.createElement('input');
		input.type = 'file';
		input.accept = 'image/*';
		input.addEventListener('change', function() {
			const file = this.files[0];
			const reader = new FileReader();
			reader.onload = function(event) {
				saveBaseFile({
					file: event.target.result
				}).then(res => {
					resolve(res.data);
				})
			};
			reader.onerror = function(err) {
				reject(err);
			};
			reader.readAsDataURL(file);
		});
		input.click();
	});
}

export default {
	imageupload
}
