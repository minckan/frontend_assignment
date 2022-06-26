const { extends: extendConfigs, overrides } = createConfig({ type: 'frontend' })

module.exports = {
    extends: [
        ...extendConfigs,
        "next/core-web-vitals"
    ]
}