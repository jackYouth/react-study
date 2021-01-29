import React, { useCallback, useState, useEffect } from "react"
import { Modal, Button, Toast } from "antd-mobile"

import styles from "./index.module.scss"
import { isArray } from "util"

/**
 * TODO:
 *  1, 获取配置接口
 *  2, 分享好友功能
 *  3, 点击抽奖时授权信息获取 + 根据当前openid给url中带入邀请人openid加次数
 *  4, 打开时判断当前用户是否授权过，授权过则根据当前openid给url中带入邀请人openid加次数
 *  5, 抽奖规则：预留两个汉字不能抽取，前50次从剩下的里面随机抽出，第51次放出一个预留，第100次再放出一个预留
 *  6, 次数增加规则：同一组openid只能同一天生效三次； 第二天次数自动加3
 */

const defaultActivityConfig = {
  banner: require("./imgs/banner.jpg"),
  textArr: [
    { text: "锄", num: 0 },
    { text: "禾", num: 1 },
    { text: "日", num: 2 },
    { text: "当", num: 3 },
    { text: "午", num: 4 },
    { text: "汗", num: 5 },
    { text: "滴", num: 6 },
    { text: "禾", num: 7 },
    { text: "下", num: 8 },
    { text: "土", num: 9 },
  ],
  times: 0,
}

const defaultRules = [
  "中奖者请到欧陆珠宝兑换使用",
  "每天可以有3次免费抽奖次数，用完能到当日0点以后继续",
  "兑换日期为1月27日至2月10日",
  "本券不兑现、不找零！",
]

const classnames = (...args) => {
  const names = args
    .map((o) => {
      if (typeof o === "string") {
        return o
      }
      if (isArray(o)) {
        return o.join(" ")
      }
      if (typeof o === "object") {
        return Object.keys(o).reduce((p, c) => {
          if (o[c]) {
            return p + " " + c
          }
          return p
        }, "")
      }
      return ""
    })
    .join(" ")
    .trim()
  return names
}

const Lottery = () => {
  const [activityConfig, setActivityConfig] = useState(null)
  const [rules, setRules] = useState([])
  const [modalVisible, setModalVisible] = useState(false)
  const [currentText, setCurrentText] = useState("")
  const [rotate, setRotate] = useState(false)

  const { banner, textArr = [], times = 0 } = activityConfig || {}
  const textLength = textArr.length
  const minLength = Math.floor(textLength / 2)
  const maxLength = textLength - minLength
  const itemWidth = `calc(${100 / maxLength}% - 10px)`

  useEffect(() => {
    setTimeout(() => {
      setActivityConfig(defaultActivityConfig)
      setRules(defaultRules)
    }, 2000)
  }, [])

  const handleLotteryClick = useCallback(() => {
    if (!times) {
      Toast.info("剩余次数为0，赶紧分享好友获得额外次数哦～")
      return
    }
    setModalVisible(true)
    setRotate(true)
    setTimeout(() => {
      const index = Math.floor(Math.random() * textLength)
      setCurrentText(textArr[index].text)
      setRotate(false)
    }, 2000)
  }, [times, textArr, textLength])

  const handleCloseModal = useCallback(() => {
    setModalVisible(false)
  }, [])

  const handleModelFooterClick = useCallback(() => {
    handleCloseModal()
  }, [handleCloseModal])

  return (
    <div className={styles.lottery}>
      {banner && (
        <img src={banner} alt="banner" className={styles.lottery__banner} />
      )}
      <ul key="arr1" className={styles.lottery__text}>
        {textArr.map(({ text, num }) => (
          <TextItem itemWidth={itemWidth} text={text} showNum num={num} />
        ))}
      </ul>
      {!!textLength && (
        <>
          <Button
            className={classnames("scaleAni", styles.lottery__btn)}
            onClick={handleLotteryClick}
          >
            点我抽奖 (剩余{times}次)
          </Button>
          <Button
            className={styles.lottery__share}
            onClick={handleLotteryClick}
          >
            分享好友
          </Button>
        </>
      )}
      {!!rules && !!rules.length && (
        <div className={styles.lottery__rules}>
          <h1 className={styles.lottery__rules__title}>活动规则</h1>
          {rules.map((o, i) => (
            <p className={styles.lottery__rules__item}>
              {i + 1}、{o}
            </p>
          ))}
        </div>
      )}
      <Modal
        visible={modalVisible}
        transparent
        maskClosable={false}
        onClose={handleCloseModal}
        title="恭喜你获得此卡"
        // wrapProps={{ onTouchStart: this.onWrapTouchStart }}
        footer={
          currentText && [
            {
              text: "开心收下",
              onPress: handleModelFooterClick,
            },
          ]
        }
        className={styles.lotteryModal__wrapper}
        // maskStyle={{ background: "#000" }}
      >
        <div className={styles.lotteryModal}>
          <div
            className={classnames(styles.lotteryModal__textContainer, {
              rotateZAni: rotate,
            })}
          >
            <TextItem
              text={currentText}
              className={styles.lotteryModal__textItem}
            />
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default Lottery

const TextItem = ({ itemWidth, text, className, showNum, num = 0 }) => (
  <li
    key={text}
    className={classnames(styles.lottery__text__item, {
      [className]: !!className,
    })}
    style={{ width: itemWidth }}
  >
    <img src={require("./imgs/item.png")} alt="" />
    <span>{text}</span>
    {!!showNum && !!num && <em>{num}</em>}
  </li>
)
