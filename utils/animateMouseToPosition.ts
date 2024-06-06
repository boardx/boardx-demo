//@ts-nocheck
import * as fabric from "@boardxus/canvasx";
export async function animateMouseToPosition(userNo: any, left: any, top: any) {
	const element = document.getElementById(userNo);
	const currentLeft = parseInt(getComputedStyle(element).left, 10);
	const currentTop = parseInt(getComputedStyle(element).top, 10);

	await fabric.util.animate({
		startValue: 1,
		endValue: 5,
		duration: 200,
		onChange(value) {
			const newLeft = currentLeft + ((left - currentLeft) * value) / 5;
			const newTop = currentTop + ((top - currentTop) * value) / 5;
			const element = document.getElementById(userNo);
			if (element) {
				element.style.left = `${newLeft}px`;
				element.style.top = `${newTop}px`;
			}
		},
		easing: fabric.util.ease.easeInOutQuad,
		onComplete() {},
	});
}

export default animateMouseToPosition;
