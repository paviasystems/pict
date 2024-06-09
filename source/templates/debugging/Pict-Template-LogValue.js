const libPictTemplate = require('../../Pict-Template.js');

class PictTemplateProviderLogValue extends libPictTemplate
{
	/**
	 * @param {Object} pFable - The Fable Framework instance
	 * @param {Object} pOptions - The options for the service
	 * @param {String} pServiceHash - The hash of the service
	 */
	constructor(pFable, pOptions, pServiceHash)
	{
		super(pFable, pOptions, pServiceHash);

		this.addPattern('{~LogValue:', '~}');
		this.addPattern('{~LV:', '~}');
	}

	render(pHash, pData, pContextArray)
	{
		let tmpHash = pHash.trim();
		let tmpData = (typeof (pData) === 'object') ? pData : {};

		let tmpValue = this.resolveStateFromAddress(tmpHash, tmpData, pContextArray);
		let tmpValueType = typeof (tmpValue);
		if ((tmpValue == null) || (tmpValueType == 'undefined'))
		{
			this.log.trace(`PICT Template Log Value: [${tmpHash}] is ${tmpValueType}.`);
		}
		else if (tmpValueType == 'object')
		{
			this.log.trace(`PICT Template Log Value: [${tmpHash}] is an object.`, tmpValue);
		}
		else
		{
			this.log.trace(`PICT Template Log Value: [${tmpHash}] is a ${tmpValueType} = [${tmpValue}]`);
		}
		return '';
	}
}

module.exports = PictTemplateProviderLogValue;
