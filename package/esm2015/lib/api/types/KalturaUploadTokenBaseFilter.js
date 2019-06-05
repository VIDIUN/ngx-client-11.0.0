/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaUploadTokenStatus } from './KalturaUploadTokenStatus';
import { KalturaFilter } from './KalturaFilter';
/**
 * @record
 */
export function KalturaUploadTokenBaseFilterArgs() { }
/** @type {?|undefined} */
KalturaUploadTokenBaseFilterArgs.prototype.idEqual;
/** @type {?|undefined} */
KalturaUploadTokenBaseFilterArgs.prototype.idIn;
/** @type {?|undefined} */
KalturaUploadTokenBaseFilterArgs.prototype.userIdEqual;
/** @type {?|undefined} */
KalturaUploadTokenBaseFilterArgs.prototype.statusEqual;
/** @type {?|undefined} */
KalturaUploadTokenBaseFilterArgs.prototype.statusIn;
/** @type {?|undefined} */
KalturaUploadTokenBaseFilterArgs.prototype.fileNameEqual;
/** @type {?|undefined} */
KalturaUploadTokenBaseFilterArgs.prototype.fileSizeEqual;
export class KalturaUploadTokenBaseFilter extends KalturaFilter {
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
            objectType: { type: 'c', default: 'KalturaUploadTokenBaseFilter' },
            idEqual: { type: 's' },
            idIn: { type: 's' },
            userIdEqual: { type: 's' },
            statusEqual: { type: 'en', subTypeConstructor: KalturaUploadTokenStatus, subType: 'KalturaUploadTokenStatus' },
            statusIn: { type: 's' },
            fileNameEqual: { type: 's' },
            fileSizeEqual: { type: 'n' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaUploadTokenBaseFilter.prototype.idEqual;
    /** @type {?} */
    KalturaUploadTokenBaseFilter.prototype.idIn;
    /** @type {?} */
    KalturaUploadTokenBaseFilter.prototype.userIdEqual;
    /** @type {?} */
    KalturaUploadTokenBaseFilter.prototype.statusEqual;
    /** @type {?} */
    KalturaUploadTokenBaseFilter.prototype.statusIn;
    /** @type {?} */
    KalturaUploadTokenBaseFilter.prototype.fileNameEqual;
    /** @type {?} */
    KalturaUploadTokenBaseFilter.prototype.fileSizeEqual;
}
typesMappingStorage['KalturaUploadTokenBaseFilter'] = KalturaUploadTokenBaseFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVVwbG9hZFRva2VuQmFzZUZpbHRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYVVwbG9hZFRva2VuQmFzZUZpbHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxhQUFhLEVBQXFCLE1BQU0saUJBQWlCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFhbkUsTUFBTSxtQ0FBb0MsU0FBUSxhQUFhOzs7O0lBVTNELFlBQVksSUFBd0M7UUFFaEQsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2Y7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLDhCQUE4QixFQUFFO1lBQ2pGLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDeEIsSUFBSSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNyQixXQUFXLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzVCLFdBQVcsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsd0JBQXdCLEVBQUUsT0FBTyxFQUFHLDBCQUEwQixFQUFFO1lBQ2xILFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekIsYUFBYSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM5QixhQUFhLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ3JCLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Q0FDSjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyw4QkFBOEIsQ0FBQyxHQUFHLDRCQUE0QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFVcGxvYWRUb2tlblN0YXR1cyB9IGZyb20gJy4vS2FsdHVyYVVwbG9hZFRva2VuU3RhdHVzJztcbmltcG9ydCB7IEthbHR1cmFGaWx0ZXIsIEthbHR1cmFGaWx0ZXJBcmdzIH0gZnJvbSAnLi9LYWx0dXJhRmlsdGVyJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhVXBsb2FkVG9rZW5CYXNlRmlsdGVyQXJncyAgZXh0ZW5kcyBLYWx0dXJhRmlsdGVyQXJncyB7XG4gICAgaWRFcXVhbD8gOiBzdHJpbmc7XG5cdGlkSW4/IDogc3RyaW5nO1xuXHR1c2VySWRFcXVhbD8gOiBzdHJpbmc7XG5cdHN0YXR1c0VxdWFsPyA6IEthbHR1cmFVcGxvYWRUb2tlblN0YXR1cztcblx0c3RhdHVzSW4/IDogc3RyaW5nO1xuXHRmaWxlTmFtZUVxdWFsPyA6IHN0cmluZztcblx0ZmlsZVNpemVFcXVhbD8gOiBudW1iZXI7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFVcGxvYWRUb2tlbkJhc2VGaWx0ZXIgZXh0ZW5kcyBLYWx0dXJhRmlsdGVyIHtcblxuICAgIGlkRXF1YWwgOiBzdHJpbmc7XG5cdGlkSW4gOiBzdHJpbmc7XG5cdHVzZXJJZEVxdWFsIDogc3RyaW5nO1xuXHRzdGF0dXNFcXVhbCA6IEthbHR1cmFVcGxvYWRUb2tlblN0YXR1cztcblx0c3RhdHVzSW4gOiBzdHJpbmc7XG5cdGZpbGVOYW1lRXF1YWwgOiBzdHJpbmc7XG5cdGZpbGVTaXplRXF1YWwgOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFVcGxvYWRUb2tlbkJhc2VGaWx0ZXJBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYVVwbG9hZFRva2VuQmFzZUZpbHRlcicgfSxcblx0XHRcdFx0aWRFcXVhbCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRpZEluIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHVzZXJJZEVxdWFsIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHN0YXR1c0VxdWFsIDogeyB0eXBlIDogJ2VuJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYVVwbG9hZFRva2VuU3RhdHVzLCBzdWJUeXBlIDogJ0thbHR1cmFVcGxvYWRUb2tlblN0YXR1cycgfSxcblx0XHRcdFx0c3RhdHVzSW4gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZmlsZU5hbWVFcXVhbCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRmaWxlU2l6ZUVxdWFsIDogeyB0eXBlIDogJ24nIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFVcGxvYWRUb2tlbkJhc2VGaWx0ZXInXSA9IEthbHR1cmFVcGxvYWRUb2tlbkJhc2VGaWx0ZXI7Il19