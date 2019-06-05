/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaObjectBase } from '../kaltura-object-base';
/**
 * @record
 */
export function KalturaFileContainerArgs() { }
/** @type {?|undefined} */
KalturaFileContainerArgs.prototype.filePath;
/** @type {?|undefined} */
KalturaFileContainerArgs.prototype.encryptionKey;
/** @type {?|undefined} */
KalturaFileContainerArgs.prototype.fileSize;
export class KalturaFileContainer extends KalturaObjectBase {
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
            objectType: { type: 'c', default: 'KalturaFileContainer' },
            filePath: { type: 's' },
            encryptionKey: { type: 's' },
            fileSize: { type: 'n' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaFileContainer.prototype.filePath;
    /** @type {?} */
    KalturaFileContainer.prototype.encryptionKey;
    /** @type {?} */
    KalturaFileContainer.prototype.fileSize;
}
typesMappingStorage['KalturaFileContainer'] = KalturaFileContainer;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUZpbGVDb250YWluZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFGaWxlQ29udGFpbmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLGlCQUFpQixFQUF5QixNQUFNLHdCQUF3QixDQUFDOzs7Ozs7Ozs7OztBQVNsRixNQUFNLDJCQUE0QixTQUFRLGlCQUFpQjs7OztJQU12RCxZQUFZLElBQWdDO1FBRXhDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNmOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxzQkFBc0IsRUFBRTtZQUN6RSxRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pCLGFBQWEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDOUIsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNoQixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0o7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLHNCQUFzQixDQUFDLEdBQUcsb0JBQW9CLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYU9iamVjdEJhc2UsIEthbHR1cmFPYmplY3RCYXNlQXJncyB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFGaWxlQ29udGFpbmVyQXJncyAgZXh0ZW5kcyBLYWx0dXJhT2JqZWN0QmFzZUFyZ3Mge1xuICAgIGZpbGVQYXRoPyA6IHN0cmluZztcblx0ZW5jcnlwdGlvbktleT8gOiBzdHJpbmc7XG5cdGZpbGVTaXplPyA6IG51bWJlcjtcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUZpbGVDb250YWluZXIgZXh0ZW5kcyBLYWx0dXJhT2JqZWN0QmFzZSB7XG5cbiAgICBmaWxlUGF0aCA6IHN0cmluZztcblx0ZW5jcnlwdGlvbktleSA6IHN0cmluZztcblx0ZmlsZVNpemUgOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFGaWxlQ29udGFpbmVyQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFGaWxlQ29udGFpbmVyJyB9LFxuXHRcdFx0XHRmaWxlUGF0aCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRlbmNyeXB0aW9uS2V5IDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGZpbGVTaXplIDogeyB0eXBlIDogJ24nIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFGaWxlQ29udGFpbmVyJ10gPSBLYWx0dXJhRmlsZUNvbnRhaW5lcjsiXX0=