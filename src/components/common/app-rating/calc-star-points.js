export default function (starWidth) {
  const centerX = starWidth / 2;
  const centerY = starWidth / 2;
  const innerCircleArms = 5; // a 5 arms star
  const innerRadius = starWidth / innerCircleArms;
  const innerOuterRadiusRatio = 2.5; // determines fatness/sharpness of star
  const outerRadius = innerRadius * innerOuterRadiusRatio;
  const angle = Math.PI / innerCircleArms;
  const angleOffsetToCenterStar = 60;
  const totalArms = innerCircleArms * 2;

  const points = [...new Array(totalArms)].map((el, idx) => {
    const isEvenIndex = idx % 2 === 0;
    const r = isEvenIndex ? outerRadius : innerRadius;
    const currX = centerX + Math.cos(idx * angle + angleOffsetToCenterStar) * r;
    const currY = centerY + Math.sin(idx * angle + angleOffsetToCenterStar) * r;

    return `${currX},${currY} `;
  });

  return points.join('');
}
