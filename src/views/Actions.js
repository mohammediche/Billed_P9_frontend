import eyeBlueIcon from "../assets/svg/eye_blue.js"
import downloadBlueIcon from "../assets/svg/download_blue.js"

export default (billUrl, fileName) => {
  return (
    `<div class="icon-actions">
      <div class="eye" data-testid="icon-eye" data-bill-url=${billUrl}>
      <p>${fileName}</p>
      ${eyeBlueIcon}
      </div>
    </div>`
  )
}