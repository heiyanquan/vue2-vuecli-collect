function getBlob(url) {
  return new Promise((resolve) => {
    const xhr = new XMLHttpRequest()

    xhr.open('GET', url, true)
    xhr.responseType = 'blob'
    xhr.onload = () => {
      if (xhr.status === 200) {
        resolve(xhr.response)
      }
    }

    xhr.send()
  })
}

function saveAs(blob, filename) {
  if (window.navigator.msSaveOrOpenBlob) {
    navigator.msSaveBlob(blob, filename)
  } else {
    const link = document.createElement('a')
    const body = document.querySelector('body')

    link.href = window.URL.createObjectURL(blob)
    link.download = filename

    // fix Firefox
    link.style.display = 'none'
    body.appendChild(link)

    link.click()
    body.removeChild(link)

    window.URL.revokeObjectURL(link.href)
  }
}
export function filterContentHtml(text) {
  if (text) {
    text = text.replace(/[\n\r\t]/g, '') // 替换style标签
    text = text.replace(/<style[^<]+<\/style>/g, '') // 替换style标签
    const SCRIPT_REGEX = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi
    text = text.replace(SCRIPT_REGEX, '') // 正则替换script内容为空
    text = text.replace(/<!--begin-->[^<]+<!--end-->/g, '') // 替换注释标签
    const reg = /<[^<>]+>/g // 1、全局匹配g肯定忘记写,2、<>标签中不能包含标签实现过滤HTML标签
    text = text.replace(reg, '') // 替换HTML标签
    text = text.replace(/\n/gi, '')
    text = text.replace(/&nbsp;/gi, '') // 替换HTML空格
    text = text.replace(//gi, '') // 替换HTML空格
    text = text.replace(/\s+/g, '')
  }
  return text
}

/**
 * 下载文件
 * @param  {String} url 目标文件地址
 * @param  {String} filename 想要保存的文件名称
 */
export function downloadFile(url, filename) {
  getBlob(url).then((blob) => {
    saveAs(blob, filename)
  })
}

function addNumPrefix(num) {
  if (`${num}`.length === 1) {
    num = `0${num}`
  }
  return num
}
