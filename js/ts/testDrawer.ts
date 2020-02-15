
export class TestDrawer {
	draw() {
		const body = $('body');
		body.append($.mustache(window.TemplateJS.test, {}));
	}

	loadData() {
		/*
		$.ajax({

		});

		*/
	}
}