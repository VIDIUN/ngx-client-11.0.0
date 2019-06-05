/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaObjectBase } from '../kaltura-object-base';
/**
 * @record
 */
export function KalturaTvinciDistributionTagArgs() { }
/** @type {?|undefined} */
KalturaTvinciDistributionTagArgs.prototype.tagname;
/** @type {?|undefined} */
KalturaTvinciDistributionTagArgs.prototype.extension;
/** @type {?|undefined} */
KalturaTvinciDistributionTagArgs.prototype.protocol;
/** @type {?|undefined} */
KalturaTvinciDistributionTagArgs.prototype.format;
/** @type {?|undefined} */
KalturaTvinciDistributionTagArgs.prototype.filename;
/** @type {?|undefined} */
KalturaTvinciDistributionTagArgs.prototype.ppvmodule;
export class KalturaTvinciDistributionTag extends KalturaObjectBase {
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
            objectType: { type: 'c', default: 'KalturaTvinciDistributionTag' },
            tagname: { type: 's' },
            extension: { type: 's' },
            protocol: { type: 's' },
            format: { type: 's' },
            filename: { type: 's' },
            ppvmodule: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaTvinciDistributionTag.prototype.tagname;
    /** @type {?} */
    KalturaTvinciDistributionTag.prototype.extension;
    /** @type {?} */
    KalturaTvinciDistributionTag.prototype.protocol;
    /** @type {?} */
    KalturaTvinciDistributionTag.prototype.format;
    /** @type {?} */
    KalturaTvinciDistributionTag.prototype.filename;
    /** @type {?} */
    KalturaTvinciDistributionTag.prototype.ppvmodule;
}
typesMappingStorage['KalturaTvinciDistributionTag'] = KalturaTvinciDistributionTag;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVR2aW5jaURpc3RyaWJ1dGlvblRhZy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYVR2aW5jaURpc3RyaWJ1dGlvblRhZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxpQkFBaUIsRUFBeUIsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFZbEYsTUFBTSxtQ0FBb0MsU0FBUSxpQkFBaUI7Ozs7SUFTL0QsWUFBWSxJQUF3QztRQUVoRCxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDZjs7OztJQUVTLFlBQVk7O1FBRWxCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsOEJBQThCLEVBQUU7WUFDakYsT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN4QixTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzFCLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekIsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN2QixRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pCLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDakIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKOzs7Ozs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyw4QkFBOEIsQ0FBQyxHQUFHLDRCQUE0QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFPYmplY3RCYXNlLCBLYWx0dXJhT2JqZWN0QmFzZUFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhVHZpbmNpRGlzdHJpYnV0aW9uVGFnQXJncyAgZXh0ZW5kcyBLYWx0dXJhT2JqZWN0QmFzZUFyZ3Mge1xuICAgIHRhZ25hbWU/IDogc3RyaW5nO1xuXHRleHRlbnNpb24/IDogc3RyaW5nO1xuXHRwcm90b2NvbD8gOiBzdHJpbmc7XG5cdGZvcm1hdD8gOiBzdHJpbmc7XG5cdGZpbGVuYW1lPyA6IHN0cmluZztcblx0cHB2bW9kdWxlPyA6IHN0cmluZztcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYVR2aW5jaURpc3RyaWJ1dGlvblRhZyBleHRlbmRzIEthbHR1cmFPYmplY3RCYXNlIHtcblxuICAgIHRhZ25hbWUgOiBzdHJpbmc7XG5cdGV4dGVuc2lvbiA6IHN0cmluZztcblx0cHJvdG9jb2wgOiBzdHJpbmc7XG5cdGZvcm1hdCA6IHN0cmluZztcblx0ZmlsZW5hbWUgOiBzdHJpbmc7XG5cdHBwdm1vZHVsZSA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYVR2aW5jaURpc3RyaWJ1dGlvblRhZ0FyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhVHZpbmNpRGlzdHJpYnV0aW9uVGFnJyB9LFxuXHRcdFx0XHR0YWduYW1lIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGV4dGVuc2lvbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRwcm90b2NvbCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRmb3JtYXQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZmlsZW5hbWUgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0cHB2bW9kdWxlIDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFUdmluY2lEaXN0cmlidXRpb25UYWcnXSA9IEthbHR1cmFUdmluY2lEaXN0cmlidXRpb25UYWc7Il19