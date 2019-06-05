/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaDropFolderFileStatus } from './KalturaDropFolderFileStatus';
import { KalturaDropFolderFileErrorCode } from './KalturaDropFolderFileErrorCode';
import { KalturaFilter } from './KalturaFilter';
/**
 * @record
 */
export function KalturaDropFolderFileBaseFilterArgs() { }
/** @type {?|undefined} */
KalturaDropFolderFileBaseFilterArgs.prototype.idEqual;
/** @type {?|undefined} */
KalturaDropFolderFileBaseFilterArgs.prototype.idIn;
/** @type {?|undefined} */
KalturaDropFolderFileBaseFilterArgs.prototype.partnerIdEqual;
/** @type {?|undefined} */
KalturaDropFolderFileBaseFilterArgs.prototype.partnerIdIn;
/** @type {?|undefined} */
KalturaDropFolderFileBaseFilterArgs.prototype.dropFolderIdEqual;
/** @type {?|undefined} */
KalturaDropFolderFileBaseFilterArgs.prototype.dropFolderIdIn;
/** @type {?|undefined} */
KalturaDropFolderFileBaseFilterArgs.prototype.fileNameEqual;
/** @type {?|undefined} */
KalturaDropFolderFileBaseFilterArgs.prototype.fileNameIn;
/** @type {?|undefined} */
KalturaDropFolderFileBaseFilterArgs.prototype.fileNameLike;
/** @type {?|undefined} */
KalturaDropFolderFileBaseFilterArgs.prototype.statusEqual;
/** @type {?|undefined} */
KalturaDropFolderFileBaseFilterArgs.prototype.statusIn;
/** @type {?|undefined} */
KalturaDropFolderFileBaseFilterArgs.prototype.statusNotIn;
/** @type {?|undefined} */
KalturaDropFolderFileBaseFilterArgs.prototype.parsedSlugEqual;
/** @type {?|undefined} */
KalturaDropFolderFileBaseFilterArgs.prototype.parsedSlugIn;
/** @type {?|undefined} */
KalturaDropFolderFileBaseFilterArgs.prototype.parsedSlugLike;
/** @type {?|undefined} */
KalturaDropFolderFileBaseFilterArgs.prototype.parsedFlavorEqual;
/** @type {?|undefined} */
KalturaDropFolderFileBaseFilterArgs.prototype.parsedFlavorIn;
/** @type {?|undefined} */
KalturaDropFolderFileBaseFilterArgs.prototype.parsedFlavorLike;
/** @type {?|undefined} */
KalturaDropFolderFileBaseFilterArgs.prototype.leadDropFolderFileIdEqual;
/** @type {?|undefined} */
KalturaDropFolderFileBaseFilterArgs.prototype.deletedDropFolderFileIdEqual;
/** @type {?|undefined} */
KalturaDropFolderFileBaseFilterArgs.prototype.entryIdEqual;
/** @type {?|undefined} */
KalturaDropFolderFileBaseFilterArgs.prototype.errorCodeEqual;
/** @type {?|undefined} */
KalturaDropFolderFileBaseFilterArgs.prototype.errorCodeIn;
/** @type {?|undefined} */
KalturaDropFolderFileBaseFilterArgs.prototype.createdAtGreaterThanOrEqual;
/** @type {?|undefined} */
KalturaDropFolderFileBaseFilterArgs.prototype.createdAtLessThanOrEqual;
/** @type {?|undefined} */
KalturaDropFolderFileBaseFilterArgs.prototype.updatedAtGreaterThanOrEqual;
/** @type {?|undefined} */
KalturaDropFolderFileBaseFilterArgs.prototype.updatedAtLessThanOrEqual;
export class KalturaDropFolderFileBaseFilter extends KalturaFilter {
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
            objectType: { type: 'c', default: 'KalturaDropFolderFileBaseFilter' },
            idEqual: { type: 'n' },
            idIn: { type: 's' },
            partnerIdEqual: { type: 'n' },
            partnerIdIn: { type: 's' },
            dropFolderIdEqual: { type: 'n' },
            dropFolderIdIn: { type: 's' },
            fileNameEqual: { type: 's' },
            fileNameIn: { type: 's' },
            fileNameLike: { type: 's' },
            statusEqual: { type: 'en', subTypeConstructor: KalturaDropFolderFileStatus, subType: 'KalturaDropFolderFileStatus' },
            statusIn: { type: 's' },
            statusNotIn: { type: 's' },
            parsedSlugEqual: { type: 's' },
            parsedSlugIn: { type: 's' },
            parsedSlugLike: { type: 's' },
            parsedFlavorEqual: { type: 's' },
            parsedFlavorIn: { type: 's' },
            parsedFlavorLike: { type: 's' },
            leadDropFolderFileIdEqual: { type: 'n' },
            deletedDropFolderFileIdEqual: { type: 'n' },
            entryIdEqual: { type: 's' },
            errorCodeEqual: { type: 'es', subTypeConstructor: KalturaDropFolderFileErrorCode, subType: 'KalturaDropFolderFileErrorCode' },
            errorCodeIn: { type: 's' },
            createdAtGreaterThanOrEqual: { type: 'd' },
            createdAtLessThanOrEqual: { type: 'd' },
            updatedAtGreaterThanOrEqual: { type: 'd' },
            updatedAtLessThanOrEqual: { type: 'd' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaDropFolderFileBaseFilter.prototype.idEqual;
    /** @type {?} */
    KalturaDropFolderFileBaseFilter.prototype.idIn;
    /** @type {?} */
    KalturaDropFolderFileBaseFilter.prototype.partnerIdEqual;
    /** @type {?} */
    KalturaDropFolderFileBaseFilter.prototype.partnerIdIn;
    /** @type {?} */
    KalturaDropFolderFileBaseFilter.prototype.dropFolderIdEqual;
    /** @type {?} */
    KalturaDropFolderFileBaseFilter.prototype.dropFolderIdIn;
    /** @type {?} */
    KalturaDropFolderFileBaseFilter.prototype.fileNameEqual;
    /** @type {?} */
    KalturaDropFolderFileBaseFilter.prototype.fileNameIn;
    /** @type {?} */
    KalturaDropFolderFileBaseFilter.prototype.fileNameLike;
    /** @type {?} */
    KalturaDropFolderFileBaseFilter.prototype.statusEqual;
    /** @type {?} */
    KalturaDropFolderFileBaseFilter.prototype.statusIn;
    /** @type {?} */
    KalturaDropFolderFileBaseFilter.prototype.statusNotIn;
    /** @type {?} */
    KalturaDropFolderFileBaseFilter.prototype.parsedSlugEqual;
    /** @type {?} */
    KalturaDropFolderFileBaseFilter.prototype.parsedSlugIn;
    /** @type {?} */
    KalturaDropFolderFileBaseFilter.prototype.parsedSlugLike;
    /** @type {?} */
    KalturaDropFolderFileBaseFilter.prototype.parsedFlavorEqual;
    /** @type {?} */
    KalturaDropFolderFileBaseFilter.prototype.parsedFlavorIn;
    /** @type {?} */
    KalturaDropFolderFileBaseFilter.prototype.parsedFlavorLike;
    /** @type {?} */
    KalturaDropFolderFileBaseFilter.prototype.leadDropFolderFileIdEqual;
    /** @type {?} */
    KalturaDropFolderFileBaseFilter.prototype.deletedDropFolderFileIdEqual;
    /** @type {?} */
    KalturaDropFolderFileBaseFilter.prototype.entryIdEqual;
    /** @type {?} */
    KalturaDropFolderFileBaseFilter.prototype.errorCodeEqual;
    /** @type {?} */
    KalturaDropFolderFileBaseFilter.prototype.errorCodeIn;
    /** @type {?} */
    KalturaDropFolderFileBaseFilter.prototype.createdAtGreaterThanOrEqual;
    /** @type {?} */
    KalturaDropFolderFileBaseFilter.prototype.createdAtLessThanOrEqual;
    /** @type {?} */
    KalturaDropFolderFileBaseFilter.prototype.updatedAtGreaterThanOrEqual;
    /** @type {?} */
    KalturaDropFolderFileBaseFilter.prototype.updatedAtLessThanOrEqual;
}
typesMappingStorage['KalturaDropFolderFileBaseFilter'] = KalturaDropFolderFileBaseFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYURyb3BGb2xkZXJGaWxlQmFzZUZpbHRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYURyb3BGb2xkZXJGaWxlQmFzZUZpbHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQzVFLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxhQUFhLEVBQXFCLE1BQU0saUJBQWlCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUNuRSxNQUFNLHNDQUF1QyxTQUFRLGFBQWE7Ozs7SUE4QjlELFlBQVksSUFBMkM7UUFFbkQsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2Y7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLGlDQUFpQyxFQUFFO1lBQ3BGLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDeEIsSUFBSSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNyQixjQUFjLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQy9CLFdBQVcsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDNUIsaUJBQWlCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ2xDLGNBQWMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDL0IsYUFBYSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM5QixVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzNCLFlBQVksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDN0IsV0FBVyxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRywyQkFBMkIsRUFBRSxPQUFPLEVBQUcsNkJBQTZCLEVBQUU7WUFDeEgsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QixXQUFXLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzVCLGVBQWUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDaEMsWUFBWSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM3QixjQUFjLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQy9CLGlCQUFpQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNsQyxjQUFjLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQy9CLGdCQUFnQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNqQyx5QkFBeUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDMUMsNEJBQTRCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzdDLFlBQVksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDN0IsY0FBYyxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyw4QkFBOEIsRUFBRSxPQUFPLEVBQUcsZ0NBQWdDLEVBQUU7WUFDakksV0FBVyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM1QiwyQkFBMkIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDNUMsd0JBQXdCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pDLDJCQUEyQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM1Qyx3QkFBd0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDaEMsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyxpQ0FBaUMsQ0FBQyxHQUFHLCtCQUErQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFEcm9wRm9sZGVyRmlsZVN0YXR1cyB9IGZyb20gJy4vS2FsdHVyYURyb3BGb2xkZXJGaWxlU3RhdHVzJztcbmltcG9ydCB7IEthbHR1cmFEcm9wRm9sZGVyRmlsZUVycm9yQ29kZSB9IGZyb20gJy4vS2FsdHVyYURyb3BGb2xkZXJGaWxlRXJyb3JDb2RlJztcbmltcG9ydCB7IEthbHR1cmFGaWx0ZXIsIEthbHR1cmFGaWx0ZXJBcmdzIH0gZnJvbSAnLi9LYWx0dXJhRmlsdGVyJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhRHJvcEZvbGRlckZpbGVCYXNlRmlsdGVyQXJncyAgZXh0ZW5kcyBLYWx0dXJhRmlsdGVyQXJncyB7XG4gICAgaWRFcXVhbD8gOiBudW1iZXI7XG5cdGlkSW4/IDogc3RyaW5nO1xuXHRwYXJ0bmVySWRFcXVhbD8gOiBudW1iZXI7XG5cdHBhcnRuZXJJZEluPyA6IHN0cmluZztcblx0ZHJvcEZvbGRlcklkRXF1YWw/IDogbnVtYmVyO1xuXHRkcm9wRm9sZGVySWRJbj8gOiBzdHJpbmc7XG5cdGZpbGVOYW1lRXF1YWw/IDogc3RyaW5nO1xuXHRmaWxlTmFtZUluPyA6IHN0cmluZztcblx0ZmlsZU5hbWVMaWtlPyA6IHN0cmluZztcblx0c3RhdHVzRXF1YWw/IDogS2FsdHVyYURyb3BGb2xkZXJGaWxlU3RhdHVzO1xuXHRzdGF0dXNJbj8gOiBzdHJpbmc7XG5cdHN0YXR1c05vdEluPyA6IHN0cmluZztcblx0cGFyc2VkU2x1Z0VxdWFsPyA6IHN0cmluZztcblx0cGFyc2VkU2x1Z0luPyA6IHN0cmluZztcblx0cGFyc2VkU2x1Z0xpa2U/IDogc3RyaW5nO1xuXHRwYXJzZWRGbGF2b3JFcXVhbD8gOiBzdHJpbmc7XG5cdHBhcnNlZEZsYXZvckluPyA6IHN0cmluZztcblx0cGFyc2VkRmxhdm9yTGlrZT8gOiBzdHJpbmc7XG5cdGxlYWREcm9wRm9sZGVyRmlsZUlkRXF1YWw/IDogbnVtYmVyO1xuXHRkZWxldGVkRHJvcEZvbGRlckZpbGVJZEVxdWFsPyA6IG51bWJlcjtcblx0ZW50cnlJZEVxdWFsPyA6IHN0cmluZztcblx0ZXJyb3JDb2RlRXF1YWw/IDogS2FsdHVyYURyb3BGb2xkZXJGaWxlRXJyb3JDb2RlO1xuXHRlcnJvckNvZGVJbj8gOiBzdHJpbmc7XG5cdGNyZWF0ZWRBdEdyZWF0ZXJUaGFuT3JFcXVhbD8gOiBEYXRlO1xuXHRjcmVhdGVkQXRMZXNzVGhhbk9yRXF1YWw/IDogRGF0ZTtcblx0dXBkYXRlZEF0R3JlYXRlclRoYW5PckVxdWFsPyA6IERhdGU7XG5cdHVwZGF0ZWRBdExlc3NUaGFuT3JFcXVhbD8gOiBEYXRlO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhRHJvcEZvbGRlckZpbGVCYXNlRmlsdGVyIGV4dGVuZHMgS2FsdHVyYUZpbHRlciB7XG5cbiAgICBpZEVxdWFsIDogbnVtYmVyO1xuXHRpZEluIDogc3RyaW5nO1xuXHRwYXJ0bmVySWRFcXVhbCA6IG51bWJlcjtcblx0cGFydG5lcklkSW4gOiBzdHJpbmc7XG5cdGRyb3BGb2xkZXJJZEVxdWFsIDogbnVtYmVyO1xuXHRkcm9wRm9sZGVySWRJbiA6IHN0cmluZztcblx0ZmlsZU5hbWVFcXVhbCA6IHN0cmluZztcblx0ZmlsZU5hbWVJbiA6IHN0cmluZztcblx0ZmlsZU5hbWVMaWtlIDogc3RyaW5nO1xuXHRzdGF0dXNFcXVhbCA6IEthbHR1cmFEcm9wRm9sZGVyRmlsZVN0YXR1cztcblx0c3RhdHVzSW4gOiBzdHJpbmc7XG5cdHN0YXR1c05vdEluIDogc3RyaW5nO1xuXHRwYXJzZWRTbHVnRXF1YWwgOiBzdHJpbmc7XG5cdHBhcnNlZFNsdWdJbiA6IHN0cmluZztcblx0cGFyc2VkU2x1Z0xpa2UgOiBzdHJpbmc7XG5cdHBhcnNlZEZsYXZvckVxdWFsIDogc3RyaW5nO1xuXHRwYXJzZWRGbGF2b3JJbiA6IHN0cmluZztcblx0cGFyc2VkRmxhdm9yTGlrZSA6IHN0cmluZztcblx0bGVhZERyb3BGb2xkZXJGaWxlSWRFcXVhbCA6IG51bWJlcjtcblx0ZGVsZXRlZERyb3BGb2xkZXJGaWxlSWRFcXVhbCA6IG51bWJlcjtcblx0ZW50cnlJZEVxdWFsIDogc3RyaW5nO1xuXHRlcnJvckNvZGVFcXVhbCA6IEthbHR1cmFEcm9wRm9sZGVyRmlsZUVycm9yQ29kZTtcblx0ZXJyb3JDb2RlSW4gOiBzdHJpbmc7XG5cdGNyZWF0ZWRBdEdyZWF0ZXJUaGFuT3JFcXVhbCA6IERhdGU7XG5cdGNyZWF0ZWRBdExlc3NUaGFuT3JFcXVhbCA6IERhdGU7XG5cdHVwZGF0ZWRBdEdyZWF0ZXJUaGFuT3JFcXVhbCA6IERhdGU7XG5cdHVwZGF0ZWRBdExlc3NUaGFuT3JFcXVhbCA6IERhdGU7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFEcm9wRm9sZGVyRmlsZUJhc2VGaWx0ZXJBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYURyb3BGb2xkZXJGaWxlQmFzZUZpbHRlcicgfSxcblx0XHRcdFx0aWRFcXVhbCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRpZEluIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHBhcnRuZXJJZEVxdWFsIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHBhcnRuZXJJZEluIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGRyb3BGb2xkZXJJZEVxdWFsIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGRyb3BGb2xkZXJJZEluIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGZpbGVOYW1lRXF1YWwgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZmlsZU5hbWVJbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRmaWxlTmFtZUxpa2UgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0c3RhdHVzRXF1YWwgOiB7IHR5cGUgOiAnZW4nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhRHJvcEZvbGRlckZpbGVTdGF0dXMsIHN1YlR5cGUgOiAnS2FsdHVyYURyb3BGb2xkZXJGaWxlU3RhdHVzJyB9LFxuXHRcdFx0XHRzdGF0dXNJbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRzdGF0dXNOb3RJbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRwYXJzZWRTbHVnRXF1YWwgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0cGFyc2VkU2x1Z0luIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHBhcnNlZFNsdWdMaWtlIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHBhcnNlZEZsYXZvckVxdWFsIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHBhcnNlZEZsYXZvckluIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHBhcnNlZEZsYXZvckxpa2UgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0bGVhZERyb3BGb2xkZXJGaWxlSWRFcXVhbCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRkZWxldGVkRHJvcEZvbGRlckZpbGVJZEVxdWFsIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGVudHJ5SWRFcXVhbCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRlcnJvckNvZGVFcXVhbCA6IHsgdHlwZSA6ICdlcycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFEcm9wRm9sZGVyRmlsZUVycm9yQ29kZSwgc3ViVHlwZSA6ICdLYWx0dXJhRHJvcEZvbGRlckZpbGVFcnJvckNvZGUnIH0sXG5cdFx0XHRcdGVycm9yQ29kZUluIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGNyZWF0ZWRBdEdyZWF0ZXJUaGFuT3JFcXVhbCA6IHsgdHlwZSA6ICdkJyB9LFxuXHRcdFx0XHRjcmVhdGVkQXRMZXNzVGhhbk9yRXF1YWwgOiB7IHR5cGUgOiAnZCcgfSxcblx0XHRcdFx0dXBkYXRlZEF0R3JlYXRlclRoYW5PckVxdWFsIDogeyB0eXBlIDogJ2QnIH0sXG5cdFx0XHRcdHVwZGF0ZWRBdExlc3NUaGFuT3JFcXVhbCA6IHsgdHlwZSA6ICdkJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhRHJvcEZvbGRlckZpbGVCYXNlRmlsdGVyJ10gPSBLYWx0dXJhRHJvcEZvbGRlckZpbGVCYXNlRmlsdGVyOyJdfQ==