/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaImportJobData } from './KalturaImportJobData';
/**
 * @record
 */
export function KalturaSshImportJobDataArgs() { }
/** @type {?|undefined} */
KalturaSshImportJobDataArgs.prototype.privateKey;
/** @type {?|undefined} */
KalturaSshImportJobDataArgs.prototype.publicKey;
/** @type {?|undefined} */
KalturaSshImportJobDataArgs.prototype.passPhrase;
export class KalturaSshImportJobData extends KalturaImportJobData {
    /**
     * @param {?=} data
     */
    constructor(data) {
        super(data);
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaSshImportJobData' },
            privateKey: { type: 's' },
            publicKey: { type: 's' },
            passPhrase: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaSshImportJobData.prototype.privateKey;
    /** @type {?} */
    KalturaSshImportJobData.prototype.publicKey;
    /** @type {?} */
    KalturaSshImportJobData.prototype.passPhrase;
}
typesMappingStorage['KalturaSshImportJobData'] = KalturaSshImportJobData;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVNzaEltcG9ydEpvYkRhdGEuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFTc2hJbXBvcnRKb2JEYXRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLG9CQUFvQixFQUE0QixNQUFNLHdCQUF3QixDQUFDOzs7Ozs7Ozs7OztBQVN4RixNQUFNLDhCQUErQixTQUFRLG9CQUFvQjs7OztJQU03RCxZQUFZLElBQW1DO1FBRTNDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNmOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyx5QkFBeUIsRUFBRTtZQUM1RSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzNCLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDMUIsVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNsQixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0o7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLHlCQUF5QixDQUFDLEdBQUcsdUJBQXVCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUltcG9ydEpvYkRhdGEsIEthbHR1cmFJbXBvcnRKb2JEYXRhQXJncyB9IGZyb20gJy4vS2FsdHVyYUltcG9ydEpvYkRhdGEnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFTc2hJbXBvcnRKb2JEYXRhQXJncyAgZXh0ZW5kcyBLYWx0dXJhSW1wb3J0Sm9iRGF0YUFyZ3Mge1xuICAgIHByaXZhdGVLZXk/IDogc3RyaW5nO1xuXHRwdWJsaWNLZXk/IDogc3RyaW5nO1xuXHRwYXNzUGhyYXNlPyA6IHN0cmluZztcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYVNzaEltcG9ydEpvYkRhdGEgZXh0ZW5kcyBLYWx0dXJhSW1wb3J0Sm9iRGF0YSB7XG5cbiAgICBwcml2YXRlS2V5IDogc3RyaW5nO1xuXHRwdWJsaWNLZXkgOiBzdHJpbmc7XG5cdHBhc3NQaHJhc2UgOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFTc2hJbXBvcnRKb2JEYXRhQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFTc2hJbXBvcnRKb2JEYXRhJyB9LFxuXHRcdFx0XHRwcml2YXRlS2V5IDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHB1YmxpY0tleSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRwYXNzUGhyYXNlIDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFTc2hJbXBvcnRKb2JEYXRhJ10gPSBLYWx0dXJhU3NoSW1wb3J0Sm9iRGF0YTsiXX0=